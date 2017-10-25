import firebase from 'firebase';
import { firebase as config } from '../config/config';

firebase.initializeApp(config);
const database = firebase.database();

export default database;
