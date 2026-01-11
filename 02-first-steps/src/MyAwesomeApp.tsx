import type { CSSProperties } from "react";

const firstName = 'Javier';
const lastName = 'Melendez';

const favoriteGames = ['Elden Ring', 'Sekiro'];

const address = {
    zipCode: 12345,
    street: 'Main avenue'
};

const myStyles: CSSProperties = {
    backgroundColor: '#ff0000',
    borderRadius: 10
};

interface Props {
    isActive: boolean;
}

export const MyAwesomeApp = ({ isActive }: Props) => {

    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            <p className="mi-clase-favoritas">{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'True' : 'False'}</h1>

            <p
                style={myStyles}
            >{JSON.stringify(address)}</p>
        </div>
    );
}