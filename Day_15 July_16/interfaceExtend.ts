/* 
Interface Extend:

Synatx:
        interface interfaceName {
                keyName: typeName
        }

         interface interfaceName extends interface2, interface1 {
                keyName: typeName
        }
*/

interface interfac1 {
  fName: string;
}

interface interfac2 {
  lName: string;
}

interface interfac3 extends interfac2, interfac1 {
  MobNo: number;
}

let objj2: interfac3 = {
  MobNo: 123,
  lName: "KK",
  fName: "KK1",
};
