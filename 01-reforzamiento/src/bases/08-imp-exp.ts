import { heroes, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    })

    if(!hero) {
        throw new Error('Index out of bound!');
    }

    return hero;
}

console.log(getHeroById(5));

export const getHeroesByOwner = (owner: string): Hero[] => {
    const myHeroes: Hero[] = heroes.filter((hero) => hero.owner === owner);

    if(!myHeroes) {
        throw new Error(`No heroes with ${owner} owner found!`);
    }

  return myHeroes;
}