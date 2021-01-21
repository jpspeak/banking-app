let user_account = JSON.parse(localStorage.getItem('user_accounts'));

function new_user(user, balance){

     user = user.toUpperCase()

     balance = parseFloat(balance);

    let obj = {name:user, balance:balance}; 

    for (var i = 0; i < user_account.length ; i++){

        var user_arr = user_account[i];
      console.log(user_arr);
    }

    if( user_account[0].name == user){  
   
   
        alert("<p style='color:red'>THE USER YOU ENTER IS ALREADY REGISTERED</p>");   
   
    }else if(user_account[1].name == user){

        alert("THE USER YOU ENTER IS ALREADY REGISTERED"); 

    }else if(user_arr.name == user){

        alert("THE USER YOU ENTER IS ALREADY REGISTERED"); 

    }else{

        
        user_account.push(obj);
        
        localStorage.setItem('user_accounts', JSON.stringify(user_account));

         document.getElementById("msg").innerHTML = "USERNAME: " + user.toUpperCase() + "<br />" + "BALANCE: "+ balance + ".00 PESOS<br />"+"<p>SUCCESSFULLY CREATED</p>"
   
        }

}

function deposite(user, amount){

    var user = user.toUpperCase();
    
    for (i = 0; i < user_account.length ; i++){
        
        // var arr_user = user_account[i];
        if(user_account[i].name == user){
       
            let dep = user_account[i].balance + amount;

            let total =  user_account[i].balance = dep
            
            // console.log("deposite")
      
            // console.log("Your new balance is " + total)
      
            return total;
        }
    }

}

function withdraw(user, amount){
    
    var user = user.toUpperCase();

    for (i = 0; i < user_account.length ; i++){
        
        // var arr_user = user_account[i];
        if(user_account[i].name == user){
       
            let dep = user_account[i].balance - amount;

            let total =  user_account[i].balance = dep
       
            // console.log("withdraw")
       
            // console.log("Your new balance is " + total)

            return total;
       
        }else if(user_account[i].balance < 0) {
            
            return "invalid you have 0.00 Pesos balance in your Account"

        }
    }
}

function DOMcreateuser(){
   
    const saving = document.getElementById("inpsaving");

    const fname = document.getElementById("inpuser");

    const submit = document.getElementById("submit");

    submitOK = "true";
    
    submit.onclick = function(){

        const Username =  fname.value;

        const Usersaving =  saving.value;


        if (Username.length > 10) {
            
            alert("The name may have no more than 10 characters");
        
            submitOK = "false";

        
        }else if (isNaN(Usersaving) || Usersaving < 1 || Usersaving > 500000) {

            alert("The saving must be a number maximum of 500,000 only");

            submitOK = "false";


        }else{
        
            new_user(Username, Usersaving)
            
            submitOK = "true";

        }

        if (submitOK == "false") {

            return false;

        }

    }        
}
DOMcreateuser();