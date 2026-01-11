import { mockGifs } from "../../mock-data/gifts.mock";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

import { useRef, useState } from "react";

const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState(['Silent Hill', 'Elden Ring', 'Sekiro']);
    const [gifList, setGifList] = useState<Gif[]>(mockGifs);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClick = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifList(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifList(gifs);
        gifsCache.current[term] = gifs;
    }

    const handleSearch = async (query: string) => {
        query = query.toLowerCase().trim();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);

        setGifList(gifs);
    }

    return {
        // values
        previousTerms,
        gifList,

        // methods
        handleTermClick,
        handleSearch
    }
}

export default useGifs
