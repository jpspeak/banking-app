let user_accounts = [
  {
    name: "JAY",
    balance: 10067999.4,
  },
  {
    name: "YAJ",
    balance: 20034544,
  },
];

function send(from_user, to_user, amount) {
  if (amount < 0) return "Invalid amount";

  const from_user_uc = from_user.toUpperCase();
  const to_user_uc = to_user.toUpperCase();

  const from_user_index = user_accounts.findIndex((user) => {
    return user.name === from_user_uc;
  });

  const to_user_index = user_accounts.findIndex((user) => {
    return user.name === to_user_uc;
  });

  if (from_user_index === -1) return "Sender does not exist";
  if (to_user_index === -1) return "Receiver does not exist";

  const user_from_balance = user_accounts[from_user_index].balance;

  if (user_from_balance >= amount) {
    user_accounts[from_user_index].balance -= amount;
    user_accounts[to_user_index].balance += amount;
    return {};
  } else {
    return "Not enough balance";
  }
}

function get_balance(user) {
  const user_uc = user.toUpperCase();
  const user_obj = user_accounts.find((user) => {
    return user.name === user_uc;
  });
  if (user_obj) {
    const balance = user_obj.balance;
    return formatBalance(balance);
  } else {
    return "User account not found";
  }
}

function list_users() {
  return user_accounts;
}

function formatBalance(num) {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
  });
}
