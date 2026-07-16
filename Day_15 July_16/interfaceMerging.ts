/* 
Interface merging:

Synatx:
        interface interfaceName {
                keyName: typeName
        }
*/

interface interfaceA {
  fName: string;
}

interface interfaceA {
  lName: string;
}

let objOne: interfaceA = {
  fName: "pqr",
  lName: "ABC",
};

//--------------------------------

// intersection (&)
interface interfaceA {
  fName: string;
}

interface interfaceB {
  lName: string;
}

let objOne1: interfaceA & interfaceB = {
  fName: "pqr",
  lName: "ABC",
};
