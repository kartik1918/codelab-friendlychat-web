/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBYF51UTbwRb02To3MJKYOErZWTe_YHl8E",
  authDomain: "friendlychat-32ce1.firebaseapp.com",
  projectId: "friendlychat-32ce1",
  storageBucket: "friendlychat-32ce1.appspot.com",
  messagingSenderId: "662396507469",
  appId: "1:662396507469:web:e136c7cf78c427d2bc5304"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
