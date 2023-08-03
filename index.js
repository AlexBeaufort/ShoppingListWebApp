// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getDatabase, push, ref} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2FMzjae-becIhdBnunOB2PNmD64z3vpo",
  authDomain: "playground-5d486.firebaseapp.com",
  databaseURL: "https://playground-5d486-default-rtdb.firebaseio.com/",
  projectId: "playground-5d486",
  storageBucket: "playground-5d486.appspot.com",
  messagingSenderId: "168831085451",
  appId: "1:168831085451:web:6d0dc86fea594eb566dd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let user;

let list ;

const inputName = document.querySelector("#input-name");
const submitBtn = document.querySelector("#submit-btn");
const div = document.querySelector(".center");
const btnArea = document.querySelector("#button-area");
const inputCon = document.querySelector("#input-container");

submitBtn.addEventListener("click", function(){
    let name = inputName.value
    
    list = ref(database, `UserList/${name} list`);
    localStorage.setItem(`userName`,name);
    inputName.value = "";
    btnArea.innerHTML ="";
    inputCon.innerHTML ="";
    
    let newBtn = document.createElement("button");
    newBtn.textContent = "Go to shopping list";
    newBtn.classList.add("input-style");
    div.append(newBtn)
    newBtn.addEventListener("click",function(){
        location.href="listpage.html"
    })
    
})
export{user};
