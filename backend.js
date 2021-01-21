//Response constructor
function Response(success, message, data) {
  this.success = success;
  this.message = message;
  this.data = data;
}
//Formats the number e.g PHP 1,000.00
export function format_balance(num) {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
  });
}
//Sends amount to a user's acount balance
export function send(from_user, to_user, amount) {
  from_user = from_user?.toUpperCase();
  to_user = to_user?.toUpperCase();
  amount = parseFloat(amount);

  if (!amount || amount < 0) return new Response(false, "Invalid amount");

  let user_accounts = getLocalStorageItemAsOject("user_accounts");

  //Returns the from_user index and to_user index
  const from_user_index = user_accounts.findIndex((user) => {
    return user.name === from_user;
  });
  const to_user_index = user_accounts.findIndex((user) => {
    return user.name === to_user;
  });

  //If sender or receiver does not exist, returns a response
  if (from_user_index === -1)
    return new Response(false, "Sender does not exist");
  if (to_user_index === -1)
    return new Response(false, "Receiver does not exist");

  const user_from_balance = user_accounts[from_user_index].balance;

  //Deducts sender balance and add to receivers balance
  if (user_from_balance >= amount) {
    user_accounts[from_user_index].balance -= amount;
    user_accounts[to_user_index].balance += amount;

    localStorage.setItem("user_accounts", JSON.stringify(user_accounts));

    return new Response(true, "Transaction successful", {
      from: {
        ...user_accounts[from_user_index],
        balance: format_balance(user_accounts[from_user_index].balance),
      },
      to: {
        ...user_accounts[to_user_index],
        balance: format_balance(user_accounts[to_user_index].balance),
      },
    });
  } else {
    return new Response(false, "Not enough balance");
  }
}

function get_balance(user) {
  const user_accounts = list_users();
  const user_uc = user.toUpperCase();
  const user_obj = user_accounts.find((user) => {
    return user.name === user_uc;
  });
  if (user_obj) {
    const balance = user_obj.balance;
    return new Response(true, "", format_balance(balance));
  } else {
    return new Response(false, "User account not found");
  }
}
//returns array of user objects with formatted balance
export function list_users() {
  let user_accounts = getLocalStorageItemAsOject("user_accounts");
  user_accounts = user_accounts.map((user_account) => {
    return {
      ...user_account,
      balance: user_account.balance,
      formatted_balance: format_balance(user_account.balance),
    };
  });
  return user_accounts.reverse();
}
//return array of user objects
function getLocalStorageItemAsOject(key) {
  const user_accounts = localStorage.getItem(key);
  if (user_accounts) return JSON.parse(user_accounts);
  return [];
}

//returns array of user objects ; searches for names
export function search(key) {
  let user_accounts = getLocalStorageItemAsOject("user_accounts");
  user_accounts = user_accounts.filter((user_account) => {
    return user_account.name.includes(key);
  });
  user_accounts = user_accounts.map((user_account) => {
    return {
      ...user_account,
      formatted_balance: format_balance(user_account.balance),
    };
  });
  return user_accounts;
}

//returns the user object from a given name
export function show(name) {
  if (!name) return;
  name = name.toUpperCase();
  const user_accounts = getLocalStorageItemAsOject("user_accounts");
  let user_account = user_accounts.find((user_account) => {
    return user_account.name === name;
  });
  if (user_account) {
    user_account = {
      ...user_account,
      balance: format_balance(user_account.balance),
    };
  }
  return user_account;
}

export function create_user(user, balance) {
  user = user.toUpperCase();
  balance = balance === "" ? 0 : parseFloat(balance);
  if (user === "") return new Response(false, "Full Name is required");
  if (isNaN(balance) || balance < 0)
    return new Response(false, "Invalid amount");

  const user_accounts = getLocalStorageItemAsOject("user_accounts");
  const last_element = user_accounts.length - 1;
  const lastId = user_accounts[last_element]?.id || 0;

  const user_account = user_accounts.find((user_account) => {
    return user_account.name === user;
  });
  if (user_account) return new Response(false, "Account name is already taken");

  if (user_accounts) {
    const new_user = { id: lastId + 1, name: user, balance: balance };
    user_accounts.push(new_user);
    localStorage.setItem("user_accounts", JSON.stringify(user_accounts));
    return new Response(true, "Account successfully created");
  }
}
export function edit_user(id, user, balance) {
  user = user.toUpperCase();
  id = parseFloat(id);
  balance = balance === "" ? 0 : parseFloat(balance);
  if (user === "") return new Response(false, "Full Name is required");
  if (isNaN(balance) || balance < 0)
    return new Response(false, "Invalid amount");

  const user_accounts = getLocalStorageItemAsOject("user_accounts");

  const user_index = user_accounts.findIndex((user_account) => {
    return user_account.id === id;
  });
  if (user_index === -1) return new Response(false, "Account not found");

  user_accounts[user_index].name = user;
  user_accounts[user_index].balance = balance;
  localStorage.setItem("user_accounts", JSON.stringify(user_accounts));
  return new Response(true, "Account successfully updated");
}

export function deposit(user, amount) {
  user = user.toUpperCase();
  amount = parseFloat(amount);

  if (!amount || amount < 0) return new Response(false, "Invalid amount");

  let user_accounts = getLocalStorageItemAsOject("user_accounts");
  const user_index = user_accounts.findIndex((user_account) => {
    return user_account.name === user;
  });

  if (user_index === -1) return new Response(false, "Account not found");

  user_accounts[user_index].balance += amount;

  localStorage.setItem("user_accounts", JSON.stringify(user_accounts));

  return new Response(true, "Transaction successful", {
    ...user_accounts[user_index],
    balance: format_balance(user_accounts[user_index].balance),
  });
}
export function withdraw(user, amount) {
  user = user.toUpperCase();
  amount = parseFloat(amount);

  if (!amount || amount < 0) return new Response(false, "Invalid amount");

  let user_accounts = getLocalStorageItemAsOject("user_accounts");
  const user_index = user_accounts.findIndex((user_account) => {
    return user_account.name === user;
  });

  if (user_index === -1) return new Response(false, "Account not found");
  if (user_accounts[user_index].balance < amount)
    return new Response(false, "Not enough balance");

  user_accounts[user_index].balance -= amount;

  localStorage.setItem("user_accounts", JSON.stringify(user_accounts));

  return new Response(true, "Transaction successful", {
    ...user_accounts[user_index],
    balance: format_balance(user_accounts[user_index].balance),
  });
}
export function delete_user(id) {
  id = parseInt(id);
  const user_accounts = getLocalStorageItemAsOject("user_accounts");
  const user_index = user_accounts.findIndex((user_account) => {
    return user_account.id === id;
  });
  if (user_index === -1) return new Response(false, "Account not found");
  user_accounts.splice(user_index, 1);
  localStorage.setItem("user_accounts", JSON.stringify(user_accounts));
  return new Response(true, "Account successfully deleted");
}

//---------Your code here------------>
