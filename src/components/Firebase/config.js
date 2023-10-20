import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3m3FEYnVxDpupyRkx53OR_Ma13Zm4pmM",
  authDomain: "proyectoreactjs-491d0.firebaseapp.com",
  projectId: "proyectoreactjs-491d0",
  storageBucket: "proyectoreactjs-491d0.appspot.com",
  messagingSenderId: "269508049060",
  appId: "1:269508049060:web:38364d6092c1066aed0e31"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

