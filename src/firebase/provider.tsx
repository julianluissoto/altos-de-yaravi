
'use client';

import React, { createContext, useContext } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

interface FirebaseContextValue {
    app: FirebaseApp | null;
    auth: Auth | null;
    firestore: Firestore | null;
}

const FirebaseContext = createContext<FirebaseContextValue>({
    app: null,
    auth: null,
    firestore: null,
});

export function FirebaseProvider({
    children,
    ...value
}: React.PropsWithChildren<FirebaseContextValue>) {
    return (
        <FirebaseContext.Provider value= { value } >
        { children }
        </FirebaseContext.Provider>
  );
}

export function useFirebase() {
    return useContext(FirebaseContext);
}

export const useFirebaseApp = () => useFirebase().app;
export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
