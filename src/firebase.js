import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAyn19rVmg68z8rh8knWpc3D1bX5GF_b9E",
    authDomain: "tindev-a0219.firebaseapp.com",
    projectId: "tindev-a0219",
    storageBucket: "tindev-a0219.appspot.com",
    messagingSenderId: "122207886267",
    appId: "1:122207886267:web:8574438546eb9f69f0029e"
  };
const firebaseApp =  firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database 