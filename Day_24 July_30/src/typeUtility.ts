/*   
Type modifiers with generics:

`Partial`, 
`Required`, 
`Readonly`

Syntax:
let variableName: Partial<Type<type>>
*/

interface interface11<T> {
  key1: T;
}

let obj11: Partial<interface11<number>> = {};
