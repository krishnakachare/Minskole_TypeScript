/* 
object: object, literal, type, &

Interface: Creating structure for the object (object, class, function)

Synatx:
interface interfaceName {
         keyName: typeName
}

class classOne {
}

function funOne (){
}
*/

type typeOne = {
  fName: string;
};

let obj2: typeOne = {
  fName: "TS",
};

// ----------------------
interface interfaceOne {
  fName: string;
}

let obj: interfaceOne = {
  fName: "TS",
};

//-------------------------
interface interface2 {
  fName: string;
  methodOne(): number;
}

let obj3: interface2 = {
  fName: "TS",
  // key(Method) : function
  methodOne: function () {
    return 2;
  },
};
