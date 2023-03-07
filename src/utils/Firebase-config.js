import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe5IKuCJOVItcCZg3MqG7Hx2_4_9iCs_0",
  authDomain: "netflix-react-clone-4cd67.firebaseapp.com",
  projectId: "netflix-react-clone-4cd67",
  storageBucket: "netflix-react-clone-4cd67.appspot.com",
  messagingSenderId: "436559552115",
  appId: "1:436559552115:web:04104e6fddf5a281b59406",
  measurementId: "G-8N95MN2QDK",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
