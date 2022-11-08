import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyC7HJmtrb5wfForynq0XL8OO1wRfk_Ve7I',

  authDomain: 'yelose-meetme.firebaseapp.com',

  projectId: 'yelose-meetme',

  storageBucket: 'yelose-meetme.appspot.com',

  messagingSenderId: '193295748636',

  appId: '1:193295748636:web:a987dbe15c4ac3ceaa19d9',

  measurementId: 'G-K31QBKSD51',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
