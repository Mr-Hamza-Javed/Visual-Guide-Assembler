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
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/* Change this if you want to keep more than one separate library of setups. */
window.FIREBASE_COLLECTION = "assembler_configs";
