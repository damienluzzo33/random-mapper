
import faker from "faker/dist/faker.js";

export class Company {
    company: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    };
    color: string;

    constructor () {
        this.company = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };
        this.color = "orange"
    };

    markerContent(): string {
        return `
            <div style="background-color: ${this.color}; padding: 5px 25px 5px 25px; display: flex; align-items: center; justify-content: center; border-radius: 15px; flex-direction: column;">
                <h1>${this.company}</h1>
                <h3>${this.catchPhrase}</h3>
            <div>
        `;
    }
}