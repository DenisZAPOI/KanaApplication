const Home = () => {
    return (
        <div className="min-h-screen">
            <main className="max-w-5xl mx-auto px-6 py-16">
                <section className="text-center mb-20 animate-fade-in">
                    <h2 className="text-5xl font-black mb-6 text-slate-800 tracking-tight">
                        À propos de <span className="text-red-500">KanaMaster</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Un outil interactif et poétique conçu pour transformer l'apprentissage des Kanas en une expérience fluide.
                    </p>
                </section>


                <section className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold text-sm uppercase tracking-wider">
                            L'origine
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800">Un projet universitaire passionné</h3>
                        <p className="text-lg text-slate-600 leading-relaxed text-justify">
                            Cette plateforme est née dans le cadre d'un <strong>projet universitaire</strong>. Notre mission était de créer une interface intuitive permettant aux étudiants de mémoriser les <strong>Hiragana</strong> et <strong>Katakana</strong> de manière ludique.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed text-justify">
                            Nous croyons que la maîtrise des bases ne doit pas être un obstacle, mais une invitation à découvrir toute la richesse de la culture japonaise.
                        </p>
                    </div>


                    <div className="relative">
                        <div className="absolute -inset-4 bg-red-100 rounded-full blur-3xl opacity-30"></div>
                        <div className="relative bg-gradient-to-br from-[#fff5f7] to-[#ffe4e8] p-16 rounded-[40px] border-2 border-[#ffdae0] shadow-xl flex justify-center items-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <span className="text-8xl font-bold text-[#d14d72] drop-shadow-sm">あ/ア</span>
                        </div>
                    </div>
                </section>


                <section className="py-12">
                    <h3 className="text-3xl font-bold mb-12 text-center text-slate-800">Pourquoi choisir KanaMaster ?</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Carte 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                                <span className="text-2xl group-hover:scale-110 transition-transform">📈</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-800">Apprentissage Progressif</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Des leçons structurées pour ne jamais se sentir submergé par le nombre de caractères.
                            </p>
                        </div>


                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8a9a5b] transition-colors">
                                <span className="text-2xl group-hover:scale-110 transition-transform">🎯</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-800">Exercices Interactifs</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Testez vos connaissances en temps réel avec nos quiz de reconnaissance visuelle.
                            </p>
                        </div>


                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                                <span className="text-2xl group-hover:scale-110 transition-transform">✨</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-slate-800">Outil Gratuit</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Développé par des étudiants, pour des étudiants. Accessible à tous, partout.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-slate-100 py-10">
                <div className="text-center text-slate-400 text-sm font-medium">
                    &copy; 2026 Denis ZAPOI — <span className="text-red-400">Projet Fil Rouge</span>
                </div>
            </footer>
        </div>
    );
};

export default Home;