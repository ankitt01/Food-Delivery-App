  import { getApp, getApps } from 'firebase/app'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBqqJrzOCyKvul94knFowtBU6KmMCtvKpI",
    authDomain: "food-delivery-app-18c72.firebaseapp.com",
    databaseURL: "https://food-delivery-app-18c72-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-18c72",
    storageBucket: "food-delivery-app-18c72.appspot.com",
    messagingSenderId: "576400701005",
    appId: "1:576400701005:web:7415d3dbfe771cdc86ce04"
  };

  const firebaseApp = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp);

  export { firebaseApp, firestore, storage}