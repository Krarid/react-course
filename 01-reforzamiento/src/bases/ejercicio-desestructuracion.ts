const useState = (name: string) => {
    const setName = (name: string) => console.log(name);
    return [name, setName] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');