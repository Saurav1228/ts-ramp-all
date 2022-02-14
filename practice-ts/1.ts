//The void type can have undefined or null as a value where as never
//cannot have any value.

let something: void = null;
let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'