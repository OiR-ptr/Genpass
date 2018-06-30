import firebase from 'firebase';
import {config} from './firebaseconfig';

export const firebaseApp = firebase.initializeApp(config);