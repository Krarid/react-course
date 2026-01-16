
import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {

    const { counter, handleAdd, handleSubstract, handleReset } = useCounter();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
            <h1>Counter: {counter}</h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                <button onClick={handleSubstract}>-1</button>
                <button onClick={handleReset}>reset</button>
                <button onClick={handleAdd}>+1</button>
            </div>
        </div>
    )
}