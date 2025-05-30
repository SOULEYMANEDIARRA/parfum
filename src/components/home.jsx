// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState, useEffect } from 'react';
import Nav from './nav';
const Home = ({ handlePageChange }) => {
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
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="bg.jpg"
                        alt="Luxury Perfume"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="titre text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                        Révélez Votre Essence
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Découvrez notre collection exclusive de parfums de luxe conçus pour exprimer votre personnalité unique.
                    </p>
                    <a href="#">
                        <button onClick={() => handlePageChange('parfumes')} className="bg-[#D4AF37] hover:bg-[#C9A227] text-white px-8 py-3 text-lg font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                            Découvrir la Collection
                        </button>
                    </a>
                </div>
            </section>
            {/* Featured Products */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Collections</h2>
                        <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                            Découvrez nos parfums les plus recherchés, chacun conçu avec les ingrédients les plus fins pour créer une expérience olfactive unique.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Product 1 */}
                        <div className="group">
                            <div className="relative overflow-hidden mb-6 bg-[#FDF6E9] rounded">
                                <img
                                    src="1.jpg"
                                    alt="Luxury Perfume"
                                    className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Ethereal Bloom</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D4AF37] font-medium">10000 FCFA</p>
                                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Achat
                                </button>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="group">
                            <div className="relative overflow-hidden mb-6 bg-[#FDF6E9] rounded">
                                <img
                                    src="2.jpg"
                                    alt="Luxury Perfume"
                                    className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Midnight Velvet</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D4AF37] font-medium">15000 FCFA</p>
                                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Achat
                                </button>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="group">
                            <div className="relative overflow-hidden mb-6 bg-[#FDF6E9] rounded">
                                <img
                                    src="3.jpg"
                                    alt="Luxury Perfume"
                                    className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Golden Aura</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D4AF37] font-medium">12000 FCFA</p>
                                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Achat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <button onClick={() => handlePageChange('parfumes')} className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                            Voir Toutes les Collections
                        </button>
                    </div>
                </div>
            </section>
            {/* Luxury Experience Section */}
            <section className="py-20 bg-[#FDF6E9]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Experience Luxe</h2>
                            <p className="text-gray-700 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta officia aperiam atque perspiciatis laborum assumenda praesentium dicta autem laboriosam reiciendis adipisci delectus itaque neque nobis, nostrum dignissimos, labore mollitia.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta officia aperiam atque perspiciatis laborum assumenda praesentium dicta autem laboriosam reiciendis adipisci delectus itaque neque nobis, nostrum dignissimos, labore mollitia.
                            </p>
                            <button onClick={() => handlePageChange('about')} className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-6 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                Notre Histoire
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <img
                                    src="img.jpg"
                                    alt="Perfume Craftsmanship"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded shadow-lg hidden md:block">
                                    <p className="text-[#D4AF37] font-serif italic">"L'artisanat dans chaque bouteille"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home
