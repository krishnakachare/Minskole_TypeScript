// optional properties (?) in interface: We can make flexible structure
interface objType2 {
  key1: string;
  key2?: number;
}

// Before optional property declaration:
// let obj3: objType2 = { key1: "TS" }; // error TS2741: Property 'key2' is missing in type '{ key1: string; }' but required in type 'objType2'.

let obj3: objType2 = { key1: "TS" };
