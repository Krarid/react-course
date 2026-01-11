import { useState } from "react";

// 1. React
// 2. Terceros
// 3. Importaciones nuestras
// 4. CSS

import './ItemCounter.css'
//import styles from './ItemCounter.module.css';

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 10 }: Props) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        if (count === 1) return;

        setCount(count - 1);
    }

    return (
        <section className="item-row" /* style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10,
        //     color: count === 1 ? 'red' : 'black'
         }} */>
            <span className="item-text" style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span data-testid='counter'>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    )
}