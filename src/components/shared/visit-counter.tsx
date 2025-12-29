'use client';

import { useFirestore } from '@/firebase';
import { doc, runTransaction, serverTimestamp, increment, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const VisitCounter = () => {
    const [visits, setVisits] = useState<number | null>(null);
    const firestore = useFirestore();

    useEffect(() => {
        if (!firestore) return;

        const counterRef = doc(firestore, 'visits', 'site-counter');
        const hasVisitedKey = 'hasVisitedSiteInThisSession';

        const incrementVisit = async () => {
            try {
                const newCount = await runTransaction(firestore, async (transaction) => {
                    const counterDoc = await transaction.get(counterRef);
                    if (!counterDoc.exists()) {
                        transaction.set(counterRef, { count: 1, lastUpdated: serverTimestamp() });
                        return 1;
                    } else {
                        const newCount = counterDoc.data().count + 1;
                        transaction.update(counterRef, { count: increment(1), lastUpdated: serverTimestamp() });
                        return newCount;
                    }
                });
                setVisits(newCount);
                sessionStorage.setItem(hasVisitedKey, 'true');
            } catch (error) {
                console.error("Error updating visit counter: ", error);
                // If transaction fails, just get the current count.
                getVisitCount();
            }
        };

        const getVisitCount = async () => {
            try {
                const counterDoc = await getDoc(counterRef);
                if (counterDoc.exists()) {
                    setVisits(counterDoc.data().count);
                } else {
                    setVisits(0);
                }
            } catch (error) {
                console.error("Error fetching visit count: ", error);
            }
        };

        const hasVisited = sessionStorage.getItem(hasVisitedKey);

        if (!hasVisited) {
            incrementVisit();
        } else {
            getVisitCount();
        }
    }, [firestore]);

    return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span>
                {visits !== null ? `${visits.toLocaleString()} visitas` : 'Cargando visitas...'}
            </span>
        </div>
    );
};

export default VisitCounter;
