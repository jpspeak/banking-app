let user_account = [

    {
        name: "JAY",
        balance: 0,
    },
    {
        name: "IMMAN",
        balance: 100,
    },
]

function new_user(user, balance){

    var user = user.toUpperCase()

    let obj = {name:user, balance:balance}; 

    for (var i = 0; i < user_account.length ; i++){

        var user_arr = user_account[i];
      
    }

    if( user_account[0].name == user){  
   
        // console.log("the user your enter it's already registered " + user);
        document.getElementById("msg").innerHTML = "<b><p style = 'color:red'>THE USER YOU ENTER IS ALREADY REGISTERED </p><b>";    
   
    }else if(user_account[1].name == user){

        // return "<b><p style = 'color:red'>THE USER YOU ENTER IS ALREADY REGISTERED </p><b>";
        document.getElementById("msg").innerHTML = "<b><p style = 'color:red'>THE USER YOU ENTER IS ALREADY REGISTERED </p><b>"; 

    }else if(user_arr.name == user){

        document.getElementById("msg").innerHTML = "<b><p style = 'color:red'>THE USER YOU ENTER IS ALREADY REGISTERED </p><b>"; 

    }else{

        user_account.push(obj);
    
        // console.log("Successfully added new user " + user);

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

function DOMcreateuser(user, amount){
    
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


        if (Username.length > 25) {
            
            alert("The name may have no more than 25 characters");
        
            submitOK = "false";

        
        }else if (isNaN(Usersaving) || Usersaving < 1 || Usersaving > 500000) {

            alert("The saving must be a number maximum of 500,000 only");

            submitOK = "false";

        }else {
        
            new_user(Username, Usersaving)
            
            submitOK = "true";

        }

        if (submitOK == "false") {

            return false;

        }

    }        
}
DOMcreateuser();