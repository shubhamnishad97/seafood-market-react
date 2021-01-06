import Rebase from 're-base';
import firebase from 'firebase';

import { apiKey, authDomain, databaseURL } from './env.js';

const firebaseApp = firebase.initializeApp({
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
