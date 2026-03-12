interface CharacterCardProps {
    character: string
    romanji: string
}
const CharacterCard = ({ character ,romanji}: CharacterCardProps) => {
    return (
        <div className="character-card">
            <h2>{character}</h2>
            <h3>{romanji}</h3>
        </div>
    );
};
export default CharacterCard