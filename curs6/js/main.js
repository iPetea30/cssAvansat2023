import BookA, {citeste} from './book.js';

//import * from "demo.js"
//import { funct1, obj2} from "demo.js"

let carte = new BookA('Poezii', 'Mihai Eminescu', 250);
console.log(carte.toString());
console.log(citeste());