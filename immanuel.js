var user_account = [
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
   
        console.log("the user your enter it's already registered " + user.toUpperCase());    
   
    }else if(user_account[1].name == user){

        console.log("the user your enter it's already registered " + user.toUpperCase());

    }else if(user_arr.name === user){

        console.log("the user your enter it's already registered " + user.toUpperCase());

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
      
            return "Your new balance is " + total
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

            return "Your new balance is " + total;
       
        }
    }
}

