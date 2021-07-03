



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



 function redirectToRoomName(name) {
   console.log(name);

   localStorage.setItem("room_name", name);
   window.location = "adt.html";
 }






 function addRoom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose: "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "adt.html";
 }





user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML = " welcome " + user_name;


function getData()
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name - " + Room_names);
      row = "<div class='well well-lg' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
