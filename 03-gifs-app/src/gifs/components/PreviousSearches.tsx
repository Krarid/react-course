import type { FC } from "react";

interface Props {
    searches: string[];
    onLabelClicked: (term: string) => void;
}

const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map((search) =>
                    <li key={search}
                        onClick={() => onLabelClicked(search)}
                    >{search}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PreviousSearches
