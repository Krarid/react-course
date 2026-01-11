function greet(name: string): string {
    return name;
}

const greet2 = (name: string): string => {
    return name;
}

const greet3 = (name: string) => name;

console.log(greet('Homero'));
console.log(greet2('Bart'));
console.log(greet3("Lisa"));

interface User {
    uuid: string;
    username: string;
}

function getUser(): User {
    return {
        uuid: 'ABC-123',
        username: 'Krarid'
    };
}

const getUser2 = () : User => {
    return {
        uuid: 'ABC-123',
        username: 'Krarid'
    };
}

const getUser3 = (): User => ({
    uuid: 'ABC-123',
    username: 'Krarid'
});


const user = getUser();
const user2 = getUser2();
const user3 = getUser3();

console.log(user);
console.log(user2);
console.log(user3);

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(console.log);