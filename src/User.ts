import faker from "faker/dist/faker.js";
import { MapItem } from "./NewMap";

//* "implements" says that User can be an argument for our addMarker method inside of NewMap because the MapItem interface is used as the argument for addMarker
export class User implements MapItem {
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