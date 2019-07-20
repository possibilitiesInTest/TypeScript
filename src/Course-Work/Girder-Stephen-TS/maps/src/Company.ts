import faker from 'faker';

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            this.lat = parseFloat(faker.address.latitude()),
            this.lng = parseFloat(faker.address.longitude())
        };
        
    }
}