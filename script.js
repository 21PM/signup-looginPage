var signup_btn = document.getElementById("signup-button");
var Firstname = document.getElementById("Fname");
var Lastname = document.getElementById("Lname");
var Email = document.getElementById("email");
var Paswrd = document.getElementById("pwd");
var ConfPaswrd = document.getElementById("cnfm-pwd");

var UsersArray = JSON.parse(localStorage.getItem("USersData"))|| [];
console.log(UsersArray);

signup_btn.addEventListener('click',UserRegistrationCheck);

function UserRegistrationCheck(){
    if(Firstname.value == ""){
        alert("Please fill First Name");
        Firstname.focus();
    }else if(Lastname.value == ""){
        alert("Please fill Last Name");
        Lastname.focus();
    }else if(Email.value == ""){
        alert("Please fill Email Address");
        Email.focus();
    }else if(Paswrd.value == ""){
        alert("Please enter the password");
        Paswrd.focus();
    }else if(ConfPaswrd.value == ""){
        alert("Please enter the confirm password");
        ConfPaswrd.focus();
    }
    else if(Paswrd.value !== ConfPaswrd.value){
        alert("Password and Confirm Password doesn't match")
       Paswrd.value = "";
       ConfPaswrd.value = "";
       return;
    }
    else{
        EmailRegistrationCheck();
        // StoreUserDetailsInLocalStorage();

    }
}
var emailFound = false; // Flag to track email existence

function EmailRegistrationCheck() {
  UsersArray.forEach((ele) => {
    if (ele.email === Email.value.toLowerCase() && !emailFound) {
      alert("Email Already Registered");
      emailFound = true;
      return; // Exit loop after first match
    }
  });

  if (!emailFound) {
    StoreUserDetailsInLocalStorage();
  }
}

function StoreUserDetailsInLocalStorage(){

    let Fname = Firstname.value;
    let Lname = Lastname.value;
    let EmailId = Email.value;
    let Passowrd = Paswrd.value;
    let Confirm_Password = ConfPaswrd.value;


    let User = {
        firstname:Firstname.value,
        lastname:Lastname.value,
        email:Email.value.toLowerCase(),
        password:Paswrd.value,
        confirm_password:ConfPaswrd.value

    }

    Firstname.value = "",Lastname.value ="",Email.value="",Paswrd.value="",ConfPaswrd.value="";
     
    UsersArray.push(User);

    let StringUsersArray = JSON.stringify(UsersArray);

    localStorage.setItem("USersData",StringUsersArray);
    
}

