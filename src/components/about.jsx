import { useState, useEffect } from 'react';
import Nav from './nav';

const About = ({ handlePageChange }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchOpen = () => {
        setIsSearchOpen(true);
    };
    const handleSearchClose = () => {
        setIsSearchOpen(false);
        setSearchQuery('');
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        // console.log('Search query:', searchQuery);
        handleSearchClose();
    };
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && isSearchOpen) {
                handleSearchClose();
            }
        };
        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [isSearchOpen]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDF6E9]">
            {/* Navigation */}
            <Nav
                isScrolled={isScrolled}
                handleSearchOpen={handleSearchOpen}
                handleSearchClose={handleSearchClose}
                isSearchOpen={isSearchOpen}
                handleSearchSubmit={handleSearchSubmit}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handlePageChange={handlePageChange}
            />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-20">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">À Propos de Nous</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Bienvenue chez ESSENCE, où nous créons des parfums exceptionnels qui racontent votre histoire.
                        Notre passion pour la parfumerie est enracinée dans la tradition mais inspirée par la modernité.
                    </p>
                </section>

                {/* Notre Histoire */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">Notre Histoire</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta officia aperiam atque perspiciatis laborum assumenda praesentium dicta autem laboriosam reiciendis adipisci delectus itaque neque nobis, nostrum dignissimos, labore mollitia.
                            </p>
                            <p className="text-lg text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta officia aperiam atque perspiciatis laborum assumenda praesentium dicta autem laboriosam reiciendis adipisci delectus itaque neque nobis, nostrum dignissimos, labore mollitia.
                            </p>
                            <p className="text-lg text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta officia aperiam atque perspiciatis laborum assumenda praesentium dicta autem laboriosam reiciendis adipisci delectus itaque neque nobis, nostrum dignissimos, labore mollitia.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">Nos Valeurs</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D4AF37]">•</span>
                                    <span className="text-gray-700">La qualité avant tout</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D4AF37]">•</span>
                                    <span className="text-gray-700">Pratiques durables</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D4AF37]">•</span>
                                    <span className="text-gray-700">Artisanat</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-[#D4AF37]">•</span>
                                    <span className="text-gray-700">Satisfaction Client</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">Notre Equipe</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 mb-4"></div>
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Chef Parfumeur</h3>
                            <p className="text-gray-600">Chef de la Création des Parfums</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 mb-4"></div>
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Directeur Creatif</h3>
                            <p className="text-gray-600">Concepteur visionnaire</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 mb-4"></div>
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Master Blendeur</h3>
                            <p className="text-gray-600">Expert Fragrance</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
