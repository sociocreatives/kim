import firebase from 'firebase'
import 'firebase/firestore'
import fireabaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(fireabaseConfig)

export default firebaseApp