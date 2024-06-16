console.log("----------------Sessão string---------------");
let firstName: string;
let surname: string;
firstName = "joão";
surname = "lacerda";

console.log(concatenateNames(firstName, surname));

function concatenateNames(firstName: string, surname: string): string{
    return `${firstName} ${surname}`
};

console.log("----------------Sessão number---------------");
let valueNumberOne: number;
let valueNumberTwo: number;
valueNumberOne = 20;
valueNumberTwo = 40;

console.log(addValues(valueNumberOne, valueNumberTwo));

function addValues(valueNumberOne: number, valueNumberTwo: number): number{

    return valueNumberOne + valueNumberTwo;
}

console.log("----------------Sessão boolean---------------");
let valueBoolean: boolean;
valueBoolean = false;
console.log("Valor booleano é:", testaBooleano(valueBoolean));

function testaBooleano(valueBoolean: boolean):boolean{
    return valueBoolean ? valueBoolean : false;
}

console.log("----------------Sessão Array<string>---------------");
let listNames: Array<string>;
listNames = ["joao", "zezinho", "lacerda"];

const newName:string = 'anderson'
console.log(addName(listNames, newName))

function addName(listNames:Array<string>, newName:string):Array<string>{
    return [...listNames, newName]
}

console.log("----------------Sessão any---------------");
let anyAmount: any;
anyAmount = 50;
console.log("Variável com número:");
console.log(checkValueAny(anyAmount))

anyAmount = "minha idade é 26"
console.log("Variável com string:")
console.log(checkValueAny(anyAmount))

function checkValueAny(anyAmount: any): any{
    return `Valor na variável: ${anyAmount}`
}

console.log("----------------Sessão Objeto, undefined e null---------------")
interface Iperson {
    firstName: string,
    surname: string,
    yearsOld: number,
    address?: string | undefined,
    phone?: string | null
}
const personOne: Iperson = {
    firstName: "john",
    surname: "cena",
    yearsOld: 30,
    address: "Rua São João"
}
const personTwo: Iperson = {
    firstName: "joão",
    surname: "lacerda",
    yearsOld: 26,
    phone: "(51) 99834-2332"
}

console.log(returnObject(personOne))

function returnObject(personOne:Iperson): Iperson{

    personOne.phone = "(51) 96798-1234"
    return personOne
}

// console.log("----------------Sessão Enum---------------");

// enum Status {
//     Active = "ACTIVE",
//     Inactive = "INACTIVE",
//     Pending = "PENDING"
// }

// let currentStatus: Status = Status.Active;
// console.log("Status atual:", currentStatus);
// currentStatus = Status.Pending;
// console.log("Status atual:", currentStatus);