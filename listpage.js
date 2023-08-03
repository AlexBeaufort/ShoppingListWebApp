// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getDatabase, push, ref, onValue, remove} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
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
const name = localStorage.getItem(`userName`);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const listDB = ref(database, `UserList/${name} list`);


const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector("#add-btn");
const ul = document.querySelector("#ul-el");
const h2Area = document.querySelector("#heading");
let regex = /[\w]+/gi
 
let h2 = document.createElement("h2");
h2.textContent= `${name}'s list`;
h2Area.append(h2);

//when button is pressed it pushes value to database
addBtn.addEventListener("click", function(){
    if( regex.test(inputField.value)){
    let inputValue = inputField.value;
    clearInput();
    push(listDB, inputValue); 
    }
})

//adds the item to the screen
function addListItem(item){
    let itemID = item[0];
    let itemValue = item[1]

    let newEl = document.createElement("li");
    newEl.textContent = itemValue;

    newEl.addEventListener("click", function(){
        let removeRef = ref(database, `UserList/${name} list/${itemID}`);
        remove(removeRef);
    })
    ul.append(newEl);

    
}

//clears the input box
function clearInput(){
    inputField.value = "";
}

//gets ride of list items on screen
function clearList(){
    ul.innerHTML = "";
}

/*this functions updates the values on screen by clearing
the screen and pulling all values from the database, it puts
them in array, then cycles through them and prints it
*/
onValue(listDB, function(snapshot){
    
    if(snapshot.exists()){
        clearList();
    let arr = Object.entries(snapshot.val());
    for(let i = 0; i<arr.length; i++){
        let currentItem = arr[i];
        addListItem(currentItem);//pushes both item and id to function
    }
}else{
    ul.innerHTML = "Just tap items to delete them";
}

    
}) 
console.log(user);






