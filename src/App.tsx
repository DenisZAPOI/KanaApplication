import { Routes, Route, Link } from "react-router-dom";
import KanaApp from "./components/KanaApp.tsx";
import QuizMode from "./components/QuizMode.tsx";
import StudyMode from "./components/StudyMode.tsx";
import Home from "./pages/Home.tsx";
import { kanaData } from "./data/kana.ts";
import { useState } from "react";
import './App.css';


function App() {
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

    return (
        <div className="app-container">
            {/* Navigation Fixe en haut */}
            <header className="main-header">
                <nav className="nav-bar">
                    <div className="nav-links">
                        <Link to="/">Accueil</Link>
                        <Link to="/study">Étude</Link>
                        <Link to="/quiz">Quiz</Link>
                        <Link to="/about">À propos</Link>
                    </div>

                    {/* Sélecteur de script intégré à la nav */}
                    <div className="script-selector">
                        <button
                            onClick={() => setScript('hiragana')}
                            className={script === 'hiragana' ? 'active' : ''}
                        >
                            あ Hiragana
                        </button>
                        <button
                            onClick={() => setScript('katakana')}
                            className={script === 'katakana' ? 'active' : ''}
                        >
                            ア Katakana
                        </button>
                    </div>
                </nav>
            </header>

            {/* Contenu principal avec marge pour ne pas être sous la nav */}
            <main className="content-area">
                <Routes>
                    <Route path="/" element={<KanaApp />} />
                    <Route path="/study" element={<StudyMode script={script} kanaData={kanaData} />} />
                    <Route path="/quiz" element={<QuizMode script={script} kanaData={kanaData} />} />
                    <Route path="/about" element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;