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

/////////////////////////////////////////////////////////////////////////////////
// keyof Example
/////////////////////////////////////////////////////////////////////////////////
const ListAppartament = ({items}: {items: Array<keyof Appartament>}) => items.map(item => <li>{item}</li>)

const app = () => <ListAppartament items={['address', 'value', 'rating']} />






