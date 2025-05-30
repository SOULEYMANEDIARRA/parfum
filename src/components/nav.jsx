import { faSearch, faTimes, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

// Ajouter les icônes à la bibliothèque
library.add(faSearch, faTimes, faShoppingBag, faBars);

export default function Nav({ isScrolled, handleSearchOpen, handleSearchClose, isSearchOpen, handleSearchSubmit, searchQuery, setSearchQuery, handlePageChange }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);


    // const handleMobileMenuToggle = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    // };

    // const handleMobileMenuClose = () => {
    //     setIsMobileMenuOpen(false);
    // };
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(true); // Affiche le menu dans le DOM tout de suite
        setTimeout(() => {
            setIsAnimating(true); // Lance l'animation d'entrée après un petit délai
        }, 10); // 10ms suffit à déclencher la transition
    };

    const handleMobileMenuClose = () => {
        setIsAnimating(false); // Lance l’animation de fermeture
        setTimeout(() => {
            setIsMobileMenuOpen(false); // Supprime le menu du DOM après la transition
        }, 300); // correspond à duration-300
    };


    return (
        <nav className={`nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="/" id="brandLogo" className="text-2xl font-serif text-[#D4AF37] font-bold cursor-pointer no-underline">ESSENCE</a>
                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="#"
                        onClick={() => handlePageChange('home')}
                        className="home  text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                    >
                        Accueil
                    </a>
                    <a href="#" onClick={() => handlePageChange('parfumes')} className="parfumes text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer whitespace-nowrap">Parfums</a>
                    <a href="#" onClick={() => handlePageChange('about')} className="about text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer whitespace-nowrap">À propos</a>
                    <a href="#" onClick={() => handlePageChange('contact')} className="contact text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer whitespace-nowrap">Contact</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        id="searchButton"
                        onClick={handleSearchOpen}
                        className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    >
                        <FontAwesomeIcon icon="search" />
                    </button>
                    {isSearchOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleSearchClose}>
                            <div
                                className="bg-white w-full max-w-2xl mx-4 p-6 rounded-lg shadow-2xl"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-serif text-gray-900">Recherche</h3>
                                    <button
                                        onClick={handleSearchClose}
                                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                                    >
                                        <FontAwesomeIcon icon="times" />
                                    </button>
                                </div>
                                <form onSubmit={handleSearchSubmit}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="searchInput"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Rechercher des parfums..."
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none text-gray-800 placeholder-gray-400"
                                            autoFocus
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-white px-6 py-2 rounded-md hover:bg-[#C9A227] transition-colors duration-300 !rounded-button whitespace-nowrap"
                                        >
                                            Rechercher
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    <button className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                        <FontAwesomeIcon icon="shopping-bag" />
                    </button>
                    <button className="md:hidden text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap" onClick={handleMobileMenuToggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={handleMobileMenuClose}>
                    <div
                        className={`bg-white w-full h-full transform transition-transform duration-300 ease-in-out`}
                        style={{
                            transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-serif font-bold text-[#D4AF37]">Menu</h3>
                                <button
                                    onClick={handleMobileMenuClose}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <FontAwesomeIcon 
                                        icon={faTimes} 
                                        className="text-gray-500 hover:text-gray-700"
                                    />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <a 
                                    href="#" 
                                    onClick={() => { handlePageChange('home'); handleMobileMenuClose(); }} 
                                    className="home block text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                                >
                                    Accueil
                                </a>
                                <a 
                                    href="#" 
                                    onClick={() => { handlePageChange('parfumes'); handleMobileMenuClose(); }} 
                                    className="parfumes block text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                                >
                                    Parfumes
                                </a>
                                <a 
                                    href="#" 
                                    onClick={() => { handlePageChange('about'); handleMobileMenuClose(); }} 
                                    className="about block text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                                >
                                    A propos
                                </a>
                                <a 
                                    href="#" 
                                    onClick={() => { handlePageChange('contact'); handleMobileMenuClose(); }} 
                                    className="contact block text-lg font-medium text-gray-800 hover:text-[#D4AF37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}