console.log("Welcome to SpaceLog");

// window.alert("Welcome to my website");
// let money = Number(window.prompt("Enter your money")).toLocaleString("ar-MA", {style: "currency", currency: "MAD"});

// console.log(`I have ${money}`);

// document.getElementById("paragraph").innerHTML = `I have ${money}`;

let users = [];
let checkBox = document.getElementById("checkBox");

class user {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function logIn(user) {
    // document.write("../html/home.html");
    window.location.href = "./html/home.html";
}

function checkUser(email, password) {
    for (let i of users)
        if (email == i.email && password == i.password)
            return i;
    return false;
}

function checkIfAlreadySigned(info) {
    for (let i of users)
        if (info == i.email || info == i.name)
            return true;
    return false;
}

document.getElementById("signInButton").onclick = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email && password){
        if (!checkBox.checked)
            window.alert("Please accept the terms and conditions");
        else{
            let _user = checkUser(email, password);
            if (_user)
                logIn(_user);
            else
                window.alert("Wrong informations");
        }
    }
    else
        window.alert("Please fill out all the informations");
}
document.getElementById("signUpButton").onclick = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email && password) {
        if (!checkBox.checked)
            window.alert("Please accept the terms and conditions");
        else {
            document.getElementById("nameInput").style.display = "initial";
            document.getElementById("nameSubmit").onclick = () => {
                document.getElementById("nameInput").style.display = "none";
                let _user = new user(document.getElementById("_name").value, email, password);
                users.push(_user);
                logIn(_user);
            }
        }
    }
    else
        window.alert("Please fill out all the informations");
}