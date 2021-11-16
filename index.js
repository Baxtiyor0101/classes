// let user = { name: "John", age: 30 };

// console.log( "age" in user ); 
// console.log( "best" in user );
// class User {

//     constructor(name) {
//       // invokes the setter
//       this.name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         alert("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }
  
//   }
  
//   let user = new User("John");
//   alert(user.name); // John
  
//   user = new User(""); // Name is too short



class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!