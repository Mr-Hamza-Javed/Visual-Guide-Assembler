/* ------------------------------------------------------------------
   FIREBASE SETUP

   1. Go to console.firebase.google.com → your project → Project settings
      → General → "Your apps" → Web app. Copy the config values in below.
   2. In the console, open Build → Firestore Database → Create database.
   3. Enable Google sign-in: Build → Authentication → Sign-in method →
      add "Google" as a provider.
   4. Add the site's domain under Authentication → Settings →
      Authorized domains (e.g. vga.alamza.com and localhost for testing),
      otherwise the Google sign-in popup is rejected.
   5. Keep this file next to index.html.

   Sign-in is REQUIRED to use the app, and every saved setup is PRIVATE to
   the Google account that created it — no one else can read, edit, or
   delete it.

   Publish the matching Firestore rules from the firestore.rules file in this
   repo (Firestore → Rules → paste → Publish). Do NOT use `allow ... if true`
   — that would make every setup world-readable and world-writable.
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
