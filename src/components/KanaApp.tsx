import { Link } from "react-router-dom";

function KanaApp() {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-8 text-red-600">Bienvenue sur KanaMaster</h1>
            <div className="flex justify-center gap-10">
                <Link to="/study" className="p-10 bg-white shadow-lg rounded-xl hover:scale-105 transition">
                    <span className="text-4xl block mb-2">📖</span>
                    <span className="text-xl font-bold">Mode Étude</span>
                </Link>
                <Link to="/quiz" className="p-10 bg-white shadow-lg rounded-xl hover:scale-105 transition">
                    <span className="text-4xl block mb-2">🎯</span>
                    <span className="text-xl font-bold">Mode Quiz</span>
                </Link>
            </div>
        </div>
    );
}
export default KanaApp;