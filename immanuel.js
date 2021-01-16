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
        return "the user your enter it's already registered ";    
   
    }else if(user_account[1].name == user){

        return "the user your enter it's already registered ";

    }else if(user_arr.name == user){

        return "the user your enter it's already registered ";

    }else{

        user_account.push(obj);
    
        // console.log("Successfully added new user " + user);

        return "Successfully added new user " + user;
   
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

