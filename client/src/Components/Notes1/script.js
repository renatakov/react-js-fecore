// let userStore = [
//     {
//         name: "Renata",
//         age: 30,
//         orders:[
//             {
//                 name: "Pizza",
//                 count: 1,
//                 price: 10
//             },
//             {
//                 name: "Chocolate",
//                 count: 1,
//                 price: 3
//             }
//         ]
//     }, 
//     {
//         name: "Maria",
//         age: 25,
//         orders:[
//             {
//                 name: "Coffee",
//                 count: 1,
//                 price: 2
//             }
//         ]
//     }
// ]

// class User{
//     constructor(username, age, orders){
//         this.name = username;
//         this.age = age;
//         this.orders = orders;
//     }
//     totalPrice = 0;
//     getTotalPrice(){
//         this.orders.forEach(order => {
//             this.totalPrice += order.price * order.count;
//         })
//         return this.totalPrice;
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
// }

 //class SecClass extends  FirstClass - SecClass наслідує FirstClass клас
// class SuperUser extends User{
// getListOrders(){
//     this.orders.forEach((order, i) => {
//         console.log(`Order ${i} - ${order.name} ${order.count}x ${order.price}`)
//     })
// }
// }
// let users = [];
// userStore.forEach(user => {
// users.push(new SuperUser(user.name, user.age, user.orders))
// })

// console.log(users[0].getAge());
// console.log(users[0])
// console.log(users[0].getTotalPrice());
// users[0].getListOrders()

// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     set name(name){
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set age(age){
//         this._age = age;
//     }

//     get age(){
//         return this._age;
//     }
// }

// let user = new User("Renata", 15);
// user.name = "Maria";
// console.log(user);

// class NewUser{
//     constructor(name, age, login, password, email){
//         this.name = name;
//         this.age = age;
//         this.login = login;
//         this.password = password;
//         this.email = email;
//     }

//     set name(name){
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
//     set age(age){
//         this._age = age;
//     }
//     get age(){
//         return this._age;
//     }
//     set login(login){
//         this._login = login;
//     }
//     get login(){
//         return this._login;
//     }
//     set password(password){
//         this._password = password;
//     }
//     get password(){
//         return this._password;
//     }
//     set email(email){
//         this._email = email;
//     }
//     get email(){
//         return this._email;
//     }
// }

// let user = new NewUser("Renata", 15, "renatakov", "admin123@", "renatakov1010@gmail.com");
// console.log(user);

// class SuperUser extends NewUser{
//     getAllInfo(){
//         let users = [];
//         users.push(this.name, this.age, this.login, this.password, this.email);
//         console.log(users);
//     }
// }

// let user2 = new SuperUser("Renata", 15, "renatakov", "admin123@", "renatakov1010@gmail.com");
// user2.getAllInfo();