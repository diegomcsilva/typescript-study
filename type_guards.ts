// https://www.youtube.com/watch?v=QK_45Wf9tmI
// https://github.com/mateusduraes/youtube-typescript-playlist/blob/master/videos/2-type-guards.md

/////////////////////////////////////////////////////////////////////////////////
// Simples example
/////////////////////////////////////////////////////////////////////////////////

function printType(value: number | string ): void {
  // Neste momento não é possível determinar se o valor é do tipo string ou number
  // value.

  if(typeof value === 'number') {
    console.log(value.toFixed())
  } else {
    console.log(value.toUpperCase())
  }
}

/////////////////////////////////////////////////////////////////////////////////
// More Complex Example
/////////////////////////////////////////////////////////////////////////////////

interface Rent {
  value: number
  specification_for_rent: string
}

interface Buy {
  value: number
  specification_for_buy: string
}

function isRent(person: Rent | Buy): person is Rent {
  return 'specification_for_rent' in person
}

function checkRentOrBuy(filter: Rent | Buy): void {
  if(isRent(filter)) {
    console.log(filter.specification_for_rent)
  } else {
    console.log(filter.specification_for_buy)
  }
}

/////////////////////////////////////////////////////////////////////////////////
// Example with class
/////////////////////////////////////////////////////////////////////////////////
// https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/


class Customer {
  isCreditAllowed(): boolean {
      // ...
      return true;
  }
}

class Supplier {
  isInShortList(): boolean {
      // ...
      return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
  let message: string = '';
  
  if (partner instanceof Customer) {
      message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
  }

  if (partner instanceof Supplier) {
      message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
  }

  return message;
}

function signContractWithIn(partner: BusinessPartner) : string {
  let message: string;
  if ('isCreditAllowed' in partner) {
      message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
  } else {
      // must be Supplier
      message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
  }
  return message;
}

// Vantagens na escrita de teste