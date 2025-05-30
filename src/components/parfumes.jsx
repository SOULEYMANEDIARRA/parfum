import { useEffect, useState } from 'react'
import Nav from './nav';
import { price } from './price';


function Parfumes({ handlePageChange }) {
    // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

    const value1 = 15000;
    const value2 = 50000;

    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([value1, value2]);
    const [currentView, setCurrentView] = useState('grid');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilters, setActiveFilters] = useState({
        scent: 'Tous',
        sort: 'En vedette'
    });

    const handleSearchOpen = () => {
        setIsSearchOpen(true);
    };

    const handleSearchClose = () => {
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // console.log('Search query:', searchQuery);
        handleSearchClose();
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value);
        const isMin = e.target.id === 'minPrice';

        if (isMin) {
            setPriceRange([value, priceRange[1]]);
        } else {
            setPriceRange([priceRange[0], value]);
        }
    };

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    const handleFilterChange = (type, value) => {
        setActiveFilters({
            ...activeFilters,
            [type]: value
        });
        setCurrentPage(1);
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

    // Sample product data
    const products = [
        {
            id: 1,
            name: "Ethereal Bloom",
            price: 20000,
            description: "A delicate floral fragrance with notes of jasmine, rose, and lily of the valley.",
            image: "1.jpg",
            scent: "Florale"
        },
        {
            id: 2,
            name: "Midnight Velvet",
            price: 24500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "2.jpg",
            scent: "Orientale"
        },
        {
            id: 3,
            name: "Golden Aura",
            price: 17500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "3.jpg",
            scent: "Fraîche"
        },
        {
            id: 4,
            name: "Amber Mystique",
            price: 22000,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "4.jpg",
            scent: "Boisée"
        },
        {
            id: 5,
            name: "Silk Embrace",
            price: 18500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "5.jpg",
            scent: "Florale"
        },
        {
            id: 6,
            name: "Noir Intense",
            price: 26500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "6.jpg",
            scent: "Orientale"
        },
        {
            id: 7,
            name: "Ocean Breeze",
            price: 16000,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "7.jpg",
            scent: "Fraîche"
        },
        {
            id: 8,
            name: "Cashmere Wood",
            price: 23000,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "8.jpg",
            scent: "Boisée"
        },
        {
            id: 9,
            name: "Rose Elixir",
            price: 21000,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "9.jpg",
            scent: "Florale"
        },
        {
            id: 10,
            name: "Vanilla Dreams",
            price: 19000,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "10.jpg",
            scent: "Orientale"
        },
        {
            id: 11,
            name: "Citrus Splash",
            price: 15500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "11.jpg",
            scent: "Fraîche"
        },
        {
            id: 12,
            name: "Cedar Whisper",
            price: 22500,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid nobis, praesentium amet rerum ab tempora ipsam nam.",
            image: "12.jpg",
            scent: "Boisée"
        }
    ];

    // Filter products based on active filters
    const filteredProducts = products.filter(product => {
        const matchesScent = activeFilters.scent === 'Tous' || product.scent === activeFilters.scent;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesScent && matchesPrice;
    });

    // Sort products based on active sort
    let sortedProducts = [...filteredProducts];
    switch (activeFilters.sort) {
        case 'Prix ​​: élevé-bas':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'Prix ​​: bas-elevé':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'En vedette':
            // In a real app, you would sort by date
            break;
        case 'Meilleure vente':
            // In a real app, you would sort by sales
            break;
        default:
            // Featured - keep original order
            break;
    }

    // Paginate products
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

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

            {/* Page Content */}
            <div className="pt-28 pb-20 container mx-auto px-4">

                {/* Page Title */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Notre Collection</h1>
                    <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Explore notre exclusive collection de parfums, chaque parfum est crafté avec les meilleurs ingrédients pour exprimer votre personnalité unique.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="padding bg-white p-6 rounded-lg shadow-md mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Scent Category Filter */}
                            <div className="relative">
                                <button
                                    className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center space-x-2 !rounded-button whitespace-nowrap cursor-pointer"
                                    onClick={() => {
                                        const menu = document.getElementById('scentMenu');
                                        if (menu) menu.classList.toggle('hidden');
                                    }}
                                >
                                    <span>Parfum: {activeFilters.scent}</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                                <div id="scentMenu" className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                                    <ul className="py-1">
                                        {['Tous', 'Florale', 'Orientale', 'Boisée', 'Fraîche'].map(scent => (
                                            <li key={scent}>
                                                <button
                                                    className={`block w-full text-left px-4 py-2 text-sm ${activeFilters.scent === scent ? 'bg-[#FDF6E9] text-[#D4AF37]' : 'text-gray-700 hover:bg-gray-100'}`}
                                                    onClick={() => {
                                                        handleFilterChange('scent', scent);
                                                        const menu = document.getElementById('scentMenu');
                                                        if (menu) menu.classList.add('hidden');
                                                    }}
                                                >
                                                    {scent}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="flex items-center space-x-2 flex-wrap">
                                <span className="text-gray-700">Prixz:</span>
                                <br />
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        id="minPrice"
                                        value={priceRange[0]}
                                        onChange={handlePriceChange}
                                        min={value1}
                                        max={priceRange[1]}
                                        className="w-24 border border-gray-300 rounded px-2 py-1 text-center"
                                    />
                                    <span className="span text-[#D4AF37]">FCFA</span>
                                    <span>-</span>
                                    <input
                                        type="number"
                                        id="maxPrice"
                                        value={priceRange[1]}
                                        onChange={handlePriceChange}
                                        min={priceRange[0]}
                                        max={value2}
                                        className="w-24 border border-gray-300 rounded px-2 py-1 text-center"
                                    />
                                    <span className="span text-[#D4AF37]">FCFA</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Sort Dropdown */}
                            <div className="relative">
                                <button
                                    className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center space-x-2 !rounded-button whitespace-nowrap cursor-pointer"
                                    onClick={() => {
                                        const menu = document.getElementById('sortMenu');
                                        if (menu) menu.classList.toggle('hidden');
                                    }}
                                >
                                    <span>Tri: {activeFilters.sort}</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                                <div id="sortMenu" className="left absolute right-0 z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                                    <ul className="py-1">
                                        {['En vedette', 'Prix ​​: élevé-bas', 'Prix ​​: bas-elevé', 'Nouveau', 'Meilleure vente'].map(sort => (
                                            <li key={sort}>
                                                <button
                                                    className={`block w-full text-left px-4 py-2 text-sm ${activeFilters.sort === sort ? 'bg-[#FDF6E9] text-[#D4AF37]' : 'text-gray-700 hover:bg-gray-100'}`}
                                                    onClick={() => {
                                                        handleFilterChange('sort', sort);
                                                        const menu = document.getElementById('sortMenu');
                                                        if (menu) menu.classList.add('hidden');
                                                    }}
                                                >
                                                    {sort}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* View Toggle */}
                            <div className="flex border border-gray-300 rounded overflow-hidden">
                                <button
                                    className={`py-2 px-3 ${currentView === 'grid' ? 'bg-[#D4AF37] text-white' : 'bg-white text-gray-700'} !rounded-button whitespace-nowrap cursor-pointer`}
                                    onClick={() => setCurrentView('grid')}
                                >
                                    <i className="fas fa-th-large"></i>
                                </button>
                                <button
                                    className={`py-2 px-3 ${currentView === 'list' ? 'bg-[#D4AF37] text-white' : 'bg-white text-gray-700'} !rounded-button whitespace-nowrap cursor-pointer`}
                                    onClick={() => setCurrentView('list')}
                                >
                                    <i className="fas fa-list"></i>
                                </button>
                            </div>

                            {/* Items Per Page */}
                            <div className="relative">
                                <button
                                    className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center space-x-2 !rounded-button whitespace-nowrap cursor-pointer"
                                    onClick={() => {
                                        const menu = document.getElementById('itemsMenu');
                                        if (menu) menu.classList.toggle('hidden');
                                    }}
                                >
                                    <span>Items: {itemsPerPage}</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                                <div id="itemsMenu" className="absolute right-0 z-10 mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                                    <ul className="py-1">
                                        {[12, 24, 36].map(num => (
                                            <li key={num}>
                                                <button
                                                    className={`block w-full text-left px-4 py-2 text-sm ${itemsPerPage === num ? 'bg-[#FDF6E9] text-[#D4AF37]' : 'text-gray-700 hover:bg-gray-100'}`}
                                                    onClick={() => {
                                                        setItemsPerPage(num);
                                                        setCurrentPage(1);
                                                        const menu = document.getElementById('itemsMenu');
                                                        if (menu) menu.classList.add('hidden');
                                                    }}
                                                >
                                                    {num}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(activeFilters.scent !== 'Tous' || priceRange[0] > value1 || priceRange[1] < value2) && (
                        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                            <span className="text-sm text-gray-600">Filtres actifs:</span>
                            {activeFilters.scent !== 'Tous' && (
                                <span className="bg-[#FDF6E9] text-[#D4AF37] text-sm px-3 py-1 rounded-full flex items-center">
                                    Parfum: {activeFilters.scent}
                                    <button
                                        className="ml-2 text-[#D4AF37] hover:text-[#C9A227] cursor-pointer !rounded-button whitespace-nowrap"
                                        onClick={() => handleFilterChange('scent', 'Tous')}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </span>
                            )}
                            {(priceRange[0] > value1 || priceRange[1] < value2) && (
                                <span className="bg-[#FDF6E9] text-[#D4AF37] text-sm px-3 py-1 rounded-full flex items-center">
                                    Prix: {priceRange[0]} FCFA - {priceRange[1]} FCFA
                                    <button
                                        className="ml-2 text-[#D4AF37] hover:text-[#C9A227] cursor-pointer !rounded-button whitespace-nowrap"
                                        onClick={() => setPriceRange([value1, value2])}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </span>
                            )}
                            <button
                                className="text-sm text-gray-600 hover:text-[#D4AF37] ml-auto cursor-pointer !rounded-button whitespace-nowrap"
                                onClick={() => {
                                    setActiveFilters({ scent: 'Tous', sort: 'En vedette' });
                                    setPriceRange([value1, value2]);
                                }}
                            >
                                Effacer tous les filtres
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6 text-gray-600">
                    Affichage {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} de {sortedProducts.length} produits
                </div>

                {/* Product Grid */}
                {currentView === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentProducts.map(product => (
                            <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative overflow-hidden h-[400px]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <button className="bg-white text-[#D4AF37] px-4 py-2 rounded-md mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer !rounded-button whitespace-nowrap">
                                        Voir
                                        </button>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-[#FDF6E9] text-[#D4AF37] text-xs px-2 py-1 rounded">
                                            {product.scent}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-[#D4AF37] font-medium mb-3">{product.price} FCFA</p>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <button className="bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#C9A227] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            Ajouter au panier
                                        </button>
                                        <button className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            <i className="far fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6 mb-12">
                        {currentProducts.map(product => (
                            <div key={product.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="md:w-1/3 relative overflow-hidden h-[300px] md:h-auto">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-[#FDF6E9] text-[#D4AF37] text-xs px-2 py-1 rounded">
                                            {product.scent}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-serif text-gray-900 mb-2">{product.name}</h3>
                                        <p className="text-[#D4AF37] font-medium text-lg mb-4">{product.price} FCFA</p>
                                        <p className="text-gray-600 mb-6">{product.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="bg-[#D4AF37] text-white px-6 py-2 rounded hover:bg-[#C9A227] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            Ajouter au panier
                                        </button>
                                        <div className="flex space-x-4">
                                            <button className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                                <i className="far fa-heart"></i>
                                            </button>
                                            <button className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                                <i className="fas fa-share-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <div className="flex items-center space-x-1">
                            <button
                                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-3 py-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#FDF6E9] hover:text-[#D4AF37]'} cursor-pointer !rounded-button whitespace-nowrap`}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-[#D4AF37] text-white' : 'text-gray-700 hover:bg-[#FDF6E9] hover:text-[#D4AF37]'} cursor-pointer !rounded-button whitespace-nowrap`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-[#FDF6E9] hover:text-[#D4AF37]'} cursor-pointer !rounded-button whitespace-nowrap`}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );

}

export default Parfumes
