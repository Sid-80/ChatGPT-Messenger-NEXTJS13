import {getApp,getApps,initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY2z9n-fpsVLZSEyyKcWVHLGAc6adgViY",
  authDomain: "chatgptmsg-d18ce.firebaseapp.com",
  projectId: "chatgptmsg-d18ce",
  storageBucket: "chatgptmsg-d18ce.appspot.com",
  messagingSenderId: "648289058036",
  appId: "1:648289058036:web:160a46ba36adcc4a6432a1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };