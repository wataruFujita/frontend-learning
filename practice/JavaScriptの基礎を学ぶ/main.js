let message;
message = "Hello!";

function hello(name) {
alert("Hello " + name + "!");
}

hello("John");

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

function checkAge(age) {
  // '?'を使った書き方
  // return (age > 18) ? true : confirm("Did parents allow you?");

  // OR || を使った書き方
  return (age > 18) || confirm("Did parents allow you?");

}

function confirm(string) {
  return false
}

// 2つの引数のうち小さい方を返す関数
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

// x を n回かけた値を返す関数
function pow(x, n) {
  total = x
  for (let i = 2; i <= n; i++) {
    total = total * x
  }
  alert(total);
}

pow(3, 3);

// 関数の返り値を変数に格納することも可能
const hello = function (name, age) {
  return name + age;
}

// 関数式で関数を記述した場合
let sayHi = function () {
  alert("Hello");
};

sayHi();

// コールバック関数
function processUser(name, callback) {
  console.log("処理開始");
  callback(name);
}

function greet(userName) {
  console.log("こんにちは" + userName + "さん");
}

processUser("テスト", greet);

function test(callback) {
  callback()
}

test(function() {console.log("test")})

// アロー関数
let add = (a, b) => alert(a + b)
add(1, 1)


// 関数宣言で定義
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  },
);

// アロー関数で書き直し
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution."),
);

// if文
function checkAdult(age) {
  if (age < 18) {
    console.log("you are young!")
  } else {
    console.log("you are adult!")
  }
}

checkAdult(20);

if (name == "ECMAScript") {
  console.log("Right!")
} else {
  console.log("You don't know?");
  console.log("“ECMAScript”!");
}


