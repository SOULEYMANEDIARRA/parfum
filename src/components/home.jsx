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
        console.log('Search query:', searchQuery);
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
                        src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20perfume%20bottle%20with%20gold%20details%20on%20a%20cream%20colored%20background%20with%20soft%20lighting%20and%20subtle%20floral%20elements%20creating%20an%20atmosphere%20of%20sophistication%20and%20luxury%2C%20high-end%20product%20photography%20with%20shallow%20depth%20of%20field&width=1440&height=900&seq=1&orientation=landscape"
                        alt="Luxury Perfume"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                        Révélez Votre Essence
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Découvrez notre collection exclusive de parfums de luxe conçus pour exprimer votre personnalité unique.
                    </p>
                    <a href="#">
                        <button className="bg-[#D4AF37] hover:bg-[#C9A227] text-white px-8 py-3 text-lg font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap">
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
                                    src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20perfume%20bottle%20with%20gold%20accents%20and%20a%20cream%20colored%20cap%20on%20a%20soft%20beige%20background%20with%20subtle%20shadows%2C%20minimalist%20high-end%20product%20photography%20with%20perfect%20lighting%20highlighting%20the%20glass%20texture%20and%20liquid%20inside&width=500&height=600&seq=2&orientation=portrait"
                                    alt="Luxury Perfume"
                                    className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Bleu Éthéré</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D4AF37] font-medium">1 FCFA</p>
                                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Achat
                                </button>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="group">
                            <div className="relative overflow-hidden mb-6 bg-[#FDF6E9] rounded">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Sophisticated%20dark%20amber%20glass%20perfume%20bottle%20with%20gold%20details%20on%20a%20cream%20colored%20background%20with%20soft%20lighting%20and%20subtle%20smoke%20effect%20creating%20an%20atmosphere%20of%20mystery%20and%20luxury%2C%20high-end%20product%20photography%20with%20perfect%20composition&width=500&height=600&seq=3&orientation=portrait"
                                    alt="Luxury Perfume"
                                    className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Velours Sombre</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D4AF37] font-medium">1 FCFA</p>
                                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Achat
                                </button>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="group">
                            <div className="relative overflow-hidden mb-6 bg-[#FDF6E9] rounded">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Crystal%20clear%20perfume%20bottle%20with%20gold%20embellishments%20and%20a%20white%20stopper%20on%20a%20cream%20colored%20background%20with%20soft%20shadows%20and%20subtle%20floral%20elements%2C%20minimalist%20luxury%20product%20photography%20with%20perfect%20lighting%20highlighting%20the%20transparency&width=500&height=600&seq=4&orientation=portrait"
                                    alt="Luxury Perfume"
                                    className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">Aura d'Or</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[#D4AF37] font-medium">1 FCFA</p>
                                <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Achat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <button className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap">
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
                                Chaque parfum est soigneusement conçu par nos maîtres parfumeurs en utilisant les ingrédients les plus fins provenant du monde entier. Notre engagement en qualité garantit une expérience olfactive exceptionnelle qui dure.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Nous croyons que un parfum est plus qu'un parfum—it's an expression of personality, a memory in the making, and a statement of elegance.
                            </p>
                            <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-6 py-2 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                Notre Histoire
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Elegant%20perfume%20making%20process%20with%20raw%20ingredients%20like%20flowers%2C%20spices%20and%20oils%20arranged%20artistically%20on%20a%20cream%20colored%20surface%20with%20soft%20lighting%20creating%20a%20luxurious%20atmosphere%2C%20high-end%20product%20photography%20with%20perfect%20composition&width=600&height=500&seq=5&orientation=landscape"
                                    alt="Perfume Craftsmanship"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded shadow-lg hidden md:block">
                                    <p className="text-[#D4AF37] font-serif italic">"Craftsmanship in every bottle"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-serif text-gray-900 mb-4">ESSENCE</h3>
                            <p className="text-gray-600 mb-4">
                                Luxe parfums fabriqués pour exprimer votre personnalité unique et éléver vos expériences quotidiennes.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Nos Collections</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">All Fragrances</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">New Arrivals</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Best Sellers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Gift Sets</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">A propos</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Notre Histoire</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Craftsmanship</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Sustainability</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Service Client</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Contactez-nous</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Shipping & Returns</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">FAQ</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 text-center">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} ESSENCE. Tous droits réservés.
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <i className="fab fa-cc-visa text-gray-400 text-xl"></i>
                            <i className="fab fa-cc-mastercard text-gray-400 text-xl"></i>
                            <i className="fab fa-cc-amex text-gray-400 text-xl"></i>
                            <i className="fab fa-cc-paypal text-gray-400 text-xl"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Home
