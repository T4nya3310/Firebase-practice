var firebaseConfig = {
    apiKey: "AIzaSyBxTeiVYfVhU5Kj5QeWBxJsA6qQrnJ9Sow",
    authDomain: "kwitterproject-dd786.firebaseapp.com",
    databaseURL: "https://kwitterproject-dd786-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-dd786",
    storageBucket: "kwitterproject-dd786.appspot.com",
    messagingSenderId: "960165243327",
    appId: "1:960165243327:web:664995ad3dddd88d15990a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}