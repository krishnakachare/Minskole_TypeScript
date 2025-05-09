// 2. generics with interface:

// old way:
interface Abc {
  key: string;
}

interface Abc2 {
  //   key: string | number | number[];
  key: number;
}

let obj: Abc = {
  key: "Hi",
};

let obj2: Abc2 = {
  key: 12,
};

// Generics:
interface Abc3<T> {
  key: T;
}

let obj3: Abc3<number> = {
  key: 12,
};

let obj4: Abc3<string> = {
  key: "HI",
};
