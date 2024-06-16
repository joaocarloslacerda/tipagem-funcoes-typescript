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

console.log("----------------Sessão Objeto---------------")
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

console.log(returnObject(personOne))

function returnObject(personOne:Iperson): Iperson{

    personOne.phone = "(51) 96798-1234"
    return personOne
}

console.log("----------------Sessão undefined---------------")
console.log("Retorno:", returnUndefined(personOne))

function returnUndefined(personOne:Iperson): undefined{ //poderia ter o retorno como void também, mas não seria um retorno undefined explícito
    if(personOne.address){
        return undefined;
    }
}

console.log("----------------Sessão null---------------")
const arrayNumbers: Array<number> = [4, 7, 3, 9, 1];
let valueSought: number = 9;

let valueReturned: number | null = lookForValue(arrayNumbers, valueSought);

if(valueReturned != null){
    console.log(`Valor ${valueReturned} encontrado`)
} else {
    console.log(`Valor buscado não encontrado`);
}

function lookForValue(arrayNumbers:Array<number>, valueSought:number): number | null{
     
    const returned = arrayNumbers.find(number => number === valueSought)
    
    return returned !== undefined ? returned : null
}

console.log("----------------Sessão Enum---------------");

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

interface User {
    firstName: string,
    surname: string,
    status: Status;
}

const users: User[] = [
    {
        firstName: "john",
        surname: "cena",
        status: Status.Active
    },
    {
        firstName: "zezinho",
        surname: "silva",
        status: Status.Inactive
    }
];

let userSearched:string = "zezinho";
console.log("Status do usuário buscado:", returnEnum(users, userSearched));

function returnEnum(users: User[], userSearched:string): Status | undefined{
    
    const userFound: User | undefined = users.find(user => user.firstName == userSearched);

    return userFound?.status
}