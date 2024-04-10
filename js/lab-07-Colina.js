//Question # 1
// let str = "Greetings, ";
// let user = {
//   firstName: "John",
//   lastname: " Smith",
//   display: function () {
//     console.log(str, this.firstName);
//     show("hi");
//   },
// };

// user.display();
// function show(msg) {
//   console.log(msg + " " + this.lastname);
// }
// show.call(user, "hello");

//Question # 2

//This askPassword() method call will lead to an error because int the parameters,
//we are only passing the reference to the function so when the actual functon is called, the this will be referring to the window
//and the window does not have this.name. To fix it, we must pass the context as well and there are various strategies to do that.
//Please see different approaches below.
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// // //Wrong way to do it
askPassword(user.loginOk, user.loginFail);

// // // Fixed using wrapper
askPassword(
  () => user.loginOk(),
  () => user.loginFail()
);

// // //Fixed using bind
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// // Fixed using call
askPassword(
  () => user.loginOk.call(user),
  () => user.loginFail.call(user)
);

// //Fixed using apply
askPassword(
  () => user.loginOk.apply(user),
  () => user.loginFail.apply(user)
);

//Question # 3
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group.showList();
