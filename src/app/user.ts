export class User {
    id: string;
    name: string;
    email: string;
    address: Address
    constructor() {
        this.address = new Address();
    }
}
class Address {
    street: string;
    city: string;
}