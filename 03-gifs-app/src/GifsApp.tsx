
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import GifList from "./gifs/components/GifList";

import useGifs from "./gifs/hooks/useGifs";

const GifsApp = () => {
    const { previousTerms, gifList, handleTermClick, handleSearch } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de gifs" description="Descubre los gifs mas nuevos" />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClick} />

            {/* Gifs */}
            <GifList gifs={gifList} />
        </>
    );
};

export default GifsApp
