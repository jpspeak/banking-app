let user_account = [
    {
        name: "jay",
        balance: 0,
    },
    {
        name: "Imman",
        balance: 100,
    },
]

function new_user(user, balance){

    let obj = {name:user, balance:balance}; 

    user_account.push(obj);

    console.log("new user")

    for (i = 0; i < user_account.length ; i++){
        
        var arr = user_account[i];
  
    }

}

function deposite(user, amount){

    for (i = 0; i < user_account.length ; i++){
        
        // var arr_user = user_account[i];
        if(user_account[i].name == user){
       
            let dep = user_account[i].balance + amount;

            let total =  user_account[i].balance = dep
            
            console.log("deposite")
      
            console.log("Your new balance is " + total)
      
        }
    }

}

function withdraw(user, amount){
  
    for (i = 0; i < user_account.length ; i++){
        
        // var arr_user = user_account[i];
        if(user_account[i].name == user){
       
            let dep = user_account[i].balance - amount;

            let total =  user_account[i].balance = dep
       
            console.log("withdraw")
       
            console.log("Your new balance is " + total)
       
        }
    }
}

