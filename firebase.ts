import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASjl91nh4Ju4xRyfoQawdBk-AzrUErQSk",
  authDomain: "dropbox-clone-ea39a.firebaseapp.com",
  projectId: "dropbox-clone-ea39a",
  storageBucket: "dropbox-clone-ea39a.appspot.com",
  messagingSenderId: "581029314977",
  appId: "1:581029314977:web:28346a54df49a37e0ccbe0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
