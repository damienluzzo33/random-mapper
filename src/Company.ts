import faker from "faker/dist/faker.js";

export class Company {
    company: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    };

    constructor () {
        this.company = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };
    };
}