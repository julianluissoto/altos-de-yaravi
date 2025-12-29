
'use client';

import { initializeFirebase } from './config';
import { FirebaseProvider } from './provider';

// We need to make sure that we only initialize Firebase once on the client
const { app, firestore, auth } = initializeFirebase();

export function FirebaseClientProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <FirebaseProvider app={app} firestore={firestore} auth={auth}>
            {children}
        </FirebaseProvider>
    );
}
