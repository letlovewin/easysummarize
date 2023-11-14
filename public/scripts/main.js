// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrDEFYvLATJPoEn7RR_gKtowK3fGoIRB8",
  authDomain: "lazysummarize.firebaseapp.com",
  projectId: "lazysummarize",
  storageBucket: "lazysummarize.appspot.com",
  messagingSenderId: "498632607314",
  appId: "1:498632607314:web:8c5e42eb1c742e201ac18b",
  measurementId: "G-R7MGXX9CPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("image_accept").addEventListener("change",function(e){
  e.preventDefault();
  fetch("", {
    method:"POST",
    body:"Hello",
    headers: {
      "Content-type":"application/json;charset=UTF-8"
    }
  })
  .then(res=>res.json())
  .then(tr=>{
    console.log(tr)
  })
})