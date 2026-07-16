/* 
Interface: Creating structure for the object (object, class, function)

Synatx:
interface interfaceName {
         keyName: typeName
}
*/

//-------------------------
// optional properties: (?)
// keyName?: value

interface interface2 {
  fName: string;
  // fName?: string;
  methodOne?(): number;
}

let obj3: interface2 = {
  fName: "TS",
};

//------------------------------

interface interface3 {
  readonly fName: string;
  methodOne(): number;
}

let obj4: interface3 = {
  fName: "TS",
  methodOne: function () {
    return 2;
  },
};

console.log(obj4.fName); // "TS"
obj4.fName = "JS"; // Cannot assign to 'fName' because it is a read-only property.
console.log(obj4.fName); // "JS"
