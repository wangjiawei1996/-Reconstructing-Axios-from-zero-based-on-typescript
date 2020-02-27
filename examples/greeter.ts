class User {
  firstName: string
  lastName: string
  fullName: string
  constructor(firstName: string, lastName: string){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}
interface Person {
  firstName: string,
  lastName: string
}
function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}
let user = new User('wang', 'jiawei')
console.log(greeter(user))