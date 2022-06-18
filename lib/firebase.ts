import { getApps, initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

import setting from "../../../firebase.json";

export const initializeFirebase = () => {
  const config = {
    apiKey: "AIzaSyDUqSshP6H6-Q_mQXP0UjwFKdqJ5O-SbPE",
    authDomain: "kagura-swap-dev.firebaseapp.com",
    projectId: "kagura-swap-dev",
    storageBucket: "kagura-swap-dev.appspot.com",
    messagingSenderId: "75818315982",
    appId: "1:75818315982:web:ebbbea283328882359609f",
    measurementId: "G-7FJY5YFC2E",
  };

  if (getApps().length === 0) {
    initializeApp(config);
    if (process.env.NODE_ENV === "development") {
      const db = getFirestore();
      connectFirestoreEmulator(db, "localhost", setting.emulators.firestore.port);
    }
  }
};
