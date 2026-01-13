import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['Pennywise', 'Jason', 'Freddy Kruger']);
    const [gifs, setGifs] = useState(mockGifs);

    const handleTermClicked = (term: string): void => {
        console.log(term);
    }

    const handleSearch = async (term: string): Promise<void> => {
        // Validar que el query no este vacio
        if (term.length === 0)
            return;

        // Quitar espacios y convertir a minusculas
        term = term.toLowerCase().trim();

        // Evitar busquedas duplicadas
        if (previousTerms.includes(term))
            return;

        setPreviousTerms([term, ...previousTerms].splice(0, 7));

        setGifs(await getGifsByQuery(term));
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />

            {/* Search */}
            <SearchBar placeholder='buscar gifs' onSearch={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onTermClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>)
}
