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

class Parent {
   constructor(public name: string, public city: string) {}

}

class Child extends Parent {
   constructor(
       myname: string,
       mycity: string,
       public street: string) {
      super(myname, mycity);
   }

}

class Grandchild extends Child {
   constructor(
       myname: string,
       mycity: string,
       street: string,
       public apartment: string) {
      super(myname, mycity, street);
   }

}

const test = new Grandchild ("Tony", "New York", "Main Street", "First Floor");
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