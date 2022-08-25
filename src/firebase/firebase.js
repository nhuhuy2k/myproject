
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyApTg6VjrPoEzGLVSfFEcPgBTPifzSAZKY",
    authDomain: "dashboard-ea3a8.firebaseapp.com",
    projectId: "dashboard-ea3a8",
    storageBucket: "dashboard-ea3a8.appspot.com",
    messagingSenderId: "947743922677",
    appId: "1:947743922677:web:dd05a439efd5072bfe68bc",
    measurementId: "G-S1ZT97H0ML"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const storage = getStorage(app);