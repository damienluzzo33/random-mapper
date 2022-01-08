
import faker from "faker/dist/faker.js";

export class User {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    color: string;

    constructor () {
        this.name = faker.name.firstName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };
        this.color = "yellow"
    };

    markerContent(): string {
        return `
            <div style="background-color: ${this.color}; padding: 5px 25px 5px 25px; display: flex; align-items: center; justify-content: center; border-radius: 15px; flex-direction: column;">
                <h3>${this.name}</h3>
            </div>
        `;
    }
}