    import { type Kana } from "../data/kana.ts";
    import CharacterCard from "./CharacterCard.tsx";

    interface CharacterGridProps {
        characters: Kana[];
        title: string;
    }

    const CharacterGrid = ({ characters, title }: CharacterGridProps) => {
        const rowNames = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'n'];
        const isHiragana = title === "Hiragana";

        return (
            <div className="kana-section">
                <h1 className="text-3xl font-bold my-8">{title}</h1>

                {rowNames.map(rowName => (
                    <div key={rowName} className="kana-row">
                        {characters
                            .filter(k => k.row === rowName)
                            .map(k => (
                                <CharacterCard
                                    key={k.romanji + rowName}
                                    character={isHiragana ? k.hiragana : k.katakana}
                                    romanji={k.romanji}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        );
    };

    export default CharacterGrid;