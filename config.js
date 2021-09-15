 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCOzysxrn5-bmWRa-RQq5ru7Le7DnppoTA",
  authDomain: "school-attendance-50a30.firebaseapp.com",
  projectId: "school-attendance-50a30",
  storageBucket: "school-attendance-50a30.appspot.com",
  messagingSenderId: "260791997432",
  appId: "1:260791997432:web:b35d0d0fe5c971fbfa3c0d"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

  export default firebase.database()
 

  