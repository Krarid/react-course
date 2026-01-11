const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const {name: ironman, age: ironAge, key} = person;
console.log({ironman, ironAge, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
}

//const {keyName, rank, user: {name, age}} = useContext(person);

const {keyName, rank, user} = useContext(person);
const {name, age} = user;

console.log({keyName, rank, name, age});