var firebaseConfig = {
    apiKey: "AIzaSyB3vq0a5cILieDd5Rlm1YfbyhJYPVgZOKU",
    authDomain: "lets-chat-bb469.firebaseapp.com",
    databaseURL: "https://lets-chat-bb469-default-rtdb.firebaseio.com",
    projectId: "lets-chat-bb469",
    storageBucket: "lets-chat-bb469.appspot.com",
    messagingSenderId: "529077057160",
    appId: "1:529077057160:web:13b9eb2ea354c0033cd13d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "chat_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
       row = "<div class= 'room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location ="chat.html";
      }