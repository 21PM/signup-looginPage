var LoginEmail =  document.getElementById("email");
var LoginPassword =  document.getElementById("pwd");
var login_Btn = document.getElementById("login-button");

console.log("paras");

let getDatafromLocal =  JSON.parse(localStorage.getItem("USersData"));

console.log(getDatafromLocal);

login_Btn.addEventListener('click',CheckCreditianls);

function CheckCreditianls(){

    console.log("button preessed");
   let ans =  getDatafromLocal.filter((ele)=>{
            if(LoginEmail.value == ele.email){
                if(ele.password === LoginPassword.value){
                    alert("you are successfully logged in")
                }else{
                    alert("Password is incorrect")
                }

            }
            
            
    })

    console.log(ans);
    

      

}
