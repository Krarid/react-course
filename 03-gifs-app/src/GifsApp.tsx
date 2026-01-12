import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['Pennywise', 'Jason', 'Freddy Kruger']);

    const handleTermClicked = (term: string): void => {
        console.log(term);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />

            {/* Search */}
            <SearchBar placeholder='buscar gifs' />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onTermClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>)
}
