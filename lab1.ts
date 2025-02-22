const multiply = (x: number, y: number): number => x * y;
console.log(multiply(2, 3));

const constNumber = 1;
const constBoolean = true;
const constString = "string";
let varObject = { key: "help" };
let varArray = [0, 0, 0];
let varRef = null;

interface Entity {
  id: number;
}
interface ToJsonStringify extends Entity {
  e1?: number;
  e2?: string;
}
const data: ToJsonStringify = {
  id: 4,
  e1: null,
  e2: null,
};
const jsonString = JSON.stringify(data);
console.log(jsonString);
