interface SuperHero {
    name: string;
    age: number;
    powers: string[];
    adress: Address
};

interface Address {
    city: string;
}

const ironman: SuperHero = {
    name: 'Tony Stark',
    age: 40,
    powers: ['Inteligencia', 'Dinero', 'Tecnología'],
    adress: {
        city: 'San Francisco',
    }
}

//const spiderman = {...ironman};
const spiderman = structuredClone(ironman);

spiderman.name = 'Peter Parker';
spiderman.age = 20;
spiderman.powers = ['Agilidad', 'Trepar paredes'];
spiderman.adress.city = 'New York';

const hulk: SuperHero = {
    name: 'Bruce Banner',
    age: 56,
    powers: ['Superfuerza', 'Ser verde'],
    adress: {
        city: 'Utah'
    }
};

console.log(ironman, spiderman, hulk);