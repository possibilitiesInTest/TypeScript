class Test {
   color: string = 'orange';
   private _intensity: number = 5;

   get intensity(): number {
      return this._intensity;
   }

   set intensity(x: number) {
    this._intensity = x;
   }


}

const mytest = new Test();

mytest.intensity = 7;
alert(mytest.intensity);

////////////////////////////////////////////////
// Ex 1. Inventory Class w. getters and setters
//      -create a class named Inventory w. three properties
//      -item: stores the item name type string
//      -_qty stores quantity of items available and its type: number
//        private, initial val: 0
//        declare get to read _qty
//      -price: stores price of each item type: number
//      -instantiate object named chocolate
//       call get on chocoalte to read _qty
//       -declare set method to edit _qty
//       -change _qty val of chocolat to 5

class Inventory {
   item: string;
   private _qty: number = 0;
   prive: number;

   get qty(): number{
     return this._qty;
   };

   set qty(x: number) {
      this._qty = x;
   }
}

const Chocolate = new Inventory();
alert(Chocolate.qty);
Chocolate.qty = 5
alert(Chocolate.qty);

// You do not need to instantiate an obj
// to use its static class methods
// STATIC properties and methods are not passed into
// instantiated objects
// must be called directly from the class


/// Grandchild extends parent classes, which extends grandparent

class Parent2 {
   constructor(public name: string, public city: string) {}

}

class Child2 extends Parent2 {
   constructor(
       myname: string,
       mycity: string,
       public street: string) {
      super(myname, mycity);
   }

}

class Grandchild2 extends Child2 {
   constructor(
       myname: string,
       mycity: string,
       street: string,
       public apartment: string) {
      super(myname, mycity, street);
   }

}

const test = new Grandchild2 ("Tony", "New York", "Main Street", "First Floor");
alert(`${test.name} from ${test.city} on ${test.street} on ${test.apartment}`)

// grandchild class implementing intergace from parent, grandparent

interface IParent {
   name: string;
   city: string;
}

interface IChild {
   street: string;
}

class Grandchild implements IParent, IChild {
   constructor(
       public name: string,
       public city: string,
       public street: string,
       public apartment: string) { }
}

const tony = new Grandchild(
    "Tony", "New York", "Main Street", "First Floor"
)
alert(`${tony.city} on ${tony.street} on ${tony.apartment}`);

// abstract classes prevent instantiation

abstract class Parent3 {
   constructor(private _name: string, public city: string) { }
   get name() {
      return this._name[0].toUpperCase()
          + this._name.substr(1).toLowerCase();
   }
}

class Child3 extends Parent3 {
   constructor(
       myname: string,
       mycity: string,
       public street: string
   ) {
      super(myname, mycity);
   }
}

const writer = new Child3("tony", "New York", "Main Street");
alert(writer.name);

const poet = new Parent3("Zayra", "San Francisco");

// private constructors control the instantiation of its objects

class Singleton {

   private static instance: Singleton;
   private constructor() { }

   static getInstance() {
      if (!Singleton.instance) {
         Singleton.instance = new Singleton();
         // if singleton object does not exist
         // instantiate first object
      }
      return Singleton.instance;
      // if singleton object exists
      // variable { } becomes pointer to
      // existing object
      // no second object is created
   }
   luckyNumber: number;
}

let v = Singleton.getInstance();
let z = Singleton.getInstance();
v.luckyNumber = 33;
alert(z.luckyNumber);
