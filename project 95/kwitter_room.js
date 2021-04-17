// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvsqrvwCNTr-zJx2dIBr3pMRQ1UsNkjnk",
      authDomain: "kwitter-70e71.firebaseapp.com",
      databaseURL: "https://kwitter-70e71-default-rtdb.firebaseio.com",
      projectId: "kwitter-70e71",
      storageBucket: "kwitter-70e71.appspot.com",
      messagingSenderId: "604418232836",
      appId: "1:604418232836:web:a7e58f7e5f5672e9329b51"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
