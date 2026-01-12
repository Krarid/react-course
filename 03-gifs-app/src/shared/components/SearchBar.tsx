import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'buscar gifs', onSearch }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(query);
            setQuery('');
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onSearch]);

    const handleQuery = () => {
        onSearch(query);
        setQuery('');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleQuery();
        }
    }

    return (
        <div className="search-container">
            <input id="searchBar" type="text" placeholder={placeholder} value={query}
                onChange={(event) => { setQuery(event.target.value); }}
                onKeyDown={handleKeyDown} />
            <button onClick={handleQuery}>Buscar</button>
        </div>
    )
}