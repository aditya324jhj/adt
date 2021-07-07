
var firebaseConfig = {
  apiKey: "AIzaSyA0njMehFj5DgHeM1dqysgC_vk6--h1JWs",
  authDomain: "dada-f1548.firebaseapp.com",
  databaseURL: "https://dada-f1548-default-rtdb.firebaseio.com",
  projectId: "dada-f1548",
  storageBucket: "dada-f1548.appspot.com",
  messagingSenderId: "772196394718",
  appId: "1:772196394718:web:cc0862b45f63d4314d844f"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
      like:0
  });

  document.getElementById("msg").value = " ";

}
