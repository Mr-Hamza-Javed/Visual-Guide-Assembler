/* ------------------------------------------------------------------
   FIREBASE SETUP

   1. Go to console.firebase.google.com → your project → Project settings
      → General → "Your apps" → Web app. Copy the config values in below.
   2. In the console, open Build → Firestore Database → Create database.
   3. Keep this file next to guide-assembler.html.

   Saved setups are PUBLIC: anyone with the app and this config can read,
   edit and delete them. Do not put anything private in a setup name.

   Firestore rules that match that (Firestore → Rules → Publish):

     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /assembler_configs/{doc} {
           allow read, write: if true;
         }
       }
     }
------------------------------------------------------------------ */

window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyBMcRBJAYLEC0oCf3zVLsPsoWTH9KYbLQc",
  authDomain:        "alamzaserver.firebaseapp.com",
  projectId:         "alamzaserver",
  storageBucket:     "alamzaserver.firebasestorage.app",
  messagingSenderId: "95415257994",
  appId:             "1:95415257994:web:f1f4a64a72d04cfcb55673",
  measurementId:     "G-DE06KMDE3T"
};

/* Change this if you want to keep more than one separate library of setups. */
window.FIREBASE_COLLECTION = "assembler_configs";
