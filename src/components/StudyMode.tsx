import CharacterGrid from "./CharacterGrid.tsx";
import type {Kana} from "../data/kana.ts";

interface StudyModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function StudyMode({ script, kanaData }: StudyModeProps) {
    return (
        <CharacterGrid
            characters={kanaData}
            title={script === 'hiragana' ? 'Hiragana' : 'Katakana'}
        />
    );
}
export default StudyMode;