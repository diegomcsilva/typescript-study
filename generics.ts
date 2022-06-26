// Example
function identity<Type>(arg: Type): Type {
  return arg;
}

identity<string>('Bola')
// identity<number>('Bola') //error
identity<number>(10)

// Example
function identityMultipleTypes<Type,OtherType>(value: Type, otherValue: OtherType): Type {
  console.log(otherValue);
  return value;
}

identity<string>('Bola')
// identity<number>('Bola') //error
identity<number>(10)

// Example identity how object
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

// Class example
interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  getIdentity () : T {
    return this.value
  }

}

const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity()) // 1

const myStringClass = new IdentityClass<string>("Hello!")
console.log(myStringClass.getIdentity()) // Hello!




/////////////////////////////////////////////////////////////////////////////////
// Generics Example 
/////////////////////////////////////////////////////////////////////////////////

interface Appartament {
  address: string
  value: string
  rating: number
}

interface User {
  name: string
  passowrd: string
  profilePic: string
}

interface Ad {
  id: number
  url: string
  image: string
}

function create<Arguments>(input: Arguments): Arguments & {timestamp: Date} {
  // fetch
  // create something with api

  return {
    ...input,
    timestamp: new Date()
  }
} 

const newUser = create<User>({
  name: 'Diego',
  passowrd: 'xxxxxxx',
  profilePic: '#'
})

const newApparent = create<Appartament>({
  address: 'Rua ...',
  value: 'xxxxxxx',
  rating: 10
})


// https://oieduardorabelo.medium.com/typescript-entendendo-generics-por-completo-40a372aeea5
// Class example
class Car {
  label: string = 'Generic Car'
  numWheels: Number = 4
  horn() {
    return "beep beep!"
  }
}

class Truck extends Car {
  label = 'Truck'
  numWheels = 18
}

class Vespa extends Car {
  label = 'Vespa'
  numWheels = 2
}

function washCar <T extends Car> (car: T) : T {
  console.log(`Received a ${car.label} in the car wash.`)
  console.log(`Cleaning all ${car.numWheels} tires.`)
  console.log('Beeping horn -', car.horn())
  console.log('Returning your car now')
  return car
}

const myVespa = new Vespa()
washCar<Vespa>(myVespa)

const myTruck = new Truck()
washCar<Truck>(myTruck)
