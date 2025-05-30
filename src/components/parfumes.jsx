import { useEffect, useState } from 'react'
import Nav from './nav';
import { price } from './price';    


function Parfumes({ handlePageChange }) {
    // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.


    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([50, 500]);
    const [currentView, setCurrentView] = useState('grid');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilters, setActiveFilters] = useState({
        scent: 'All',
        sort: 'Featured'
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
        console.log('Search query:', searchQuery);
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
            price: 195,
            description: "A delicate floral fragrance with notes of jasmine, rose, and lily of the valley.",
            image: "https://readdy.ai/api/search-image?query=Elegant%2520luxury%2520perfume%2520bottle%2520with%2520gold%2520accents%2520and%2520a%2520cream%2520colored%2520cap%2520on%2520a%2520soft%2520beige%2520background%2520with%2520subtle%2520shadows%252C%2520minimalist%2520high-end%2520product%2520photography%2520with%2520perfect%2520lighting%2520highlighting%2520the%2520glass%2520texture%2520and%2520liquid%2520inside&width=500&height=600&seq=2&orientation=portrait",
            scent: "Floral"
        },
        {
            id: 2,
            name: "Midnight Velvet",
            price: 245,
            description: "An intoxicating oriental fragrance with warm amber, vanilla, and exotic spices.",
            image: "https://readdy.ai/api/search-image?query=Sophisticated%2520dark%2520amber%2520glass%2520perfume%2520bottle%2520with%2520gold%2520details%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520smoke%2520effect%2520creating%2520an%2520atmosphere%2520of%2520mystery%2520and%2520luxury%252C%2520high-end%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=3&orientation=portrait",
            scent: "Oriental"
        },
        {
            id: 3,
            name: "Golden Aura",
            price: 175,
            description: "A fresh citrus blend with bergamot, lemon, and a hint of Mediterranean herbs.",
            image: "https://readdy.ai/api/search-image?query=Crystal%2520clear%2520perfume%2520bottle%2520with%2520gold%2520embellishments%2520and%2520a%2520white%2520stopper%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520shadows%2520and%2520subtle%2520floral%2520elements%252C%2520minimalist%2520luxury%2520product%2520photography%2520with%2520perfect%2520lighting%2520highlighting%2520the%2520transparency&width=500&height=600&seq=4&orientation=portrait",
            scent: "Fresh"
        },
        {
            id: 4,
            name: "Amber Mystique",
            price: 220,
            description: "A woody fragrance with sandalwood, cedar, and hints of amber and musk.",
            image: "https://readdy.ai/api/search-image?query=Elegant%2520amber%2520glass%2520perfume%2520bottle%2520with%2520ornate%2520gold%2520cap%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520wood%2520elements%2520creating%2520a%2520warm%2520luxurious%2520atmosphere%252C%2520high-end%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=6&orientation=portrait",
            scent: "Woody"
        },
        {
            id: 5,
            name: "Silk Embrace",
            price: 185,
            description: "A powdery floral with iris, violet, and delicate white musk notes.",
            image: "https://readdy.ai/api/search-image?query=Delicate%2520glass%2520perfume%2520bottle%2520with%2520silver%2520and%2520gold%2520accents%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520silk%2520fabric%2520elements%2520creating%2520an%2520elegant%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=7&orientation=portrait",
            scent: "Floral"
        },
        {
            id: 6,
            name: "Noir Intense",
            price: 265,
            description: "A deep oriental fragrance with tobacco, leather, and rich spices.",
            image: "https://readdy.ai/api/search-image?query=Dark%2520sophisticated%2520glass%2520perfume%2520bottle%2520with%2520black%2520and%2520gold%2520details%2520on%2520a%2520cream%2520colored%2520background%2520with%2520dramatic%2520lighting%2520and%2520subtle%2520smoke%2520effect%2520creating%2520a%2520mysterious%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=8&orientation=portrait",
            scent: "Oriental"
        },
        {
            id: 7,
            name: "Ocean Breeze",
            price: 160,
            description: "A fresh aquatic scent with sea salt, driftwood, and citrus notes.",
            image: "https://readdy.ai/api/search-image?query=Blue%2520tinted%2520glass%2520perfume%2520bottle%2520with%2520silver%2520cap%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520water%2520elements%2520creating%2520a%2520fresh%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=9&orientation=portrait",
            scent: "Fresh"
        },
        {
            id: 8,
            name: "Cashmere Wood",
            price: 230,
            description: "A warm woody fragrance with cashmere wood, vanilla, and patchouli.",
            image: "https://readdy.ai/api/search-image?query=Elegant%2520wooden%2520capped%2520perfume%2520bottle%2520with%2520amber%2520liquid%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520wooden%2520elements%2520creating%2520a%2520warm%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=10&orientation=portrait",
            scent: "Woody"
        },
        {
            id: 9,
            name: "Rose Elixir",
            price: 210,
            description: "A luxurious rose fragrance with Bulgarian rose, peony, and light musk.",
            image: "https://readdy.ai/api/search-image?query=Pink%2520tinted%2520glass%2520perfume%2520bottle%2520with%2520gold%2520details%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520rose%2520petals%2520creating%2520a%2520romantic%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=11&orientation=portrait",
            scent: "Floral"
        },
        {
            id: 10,
            name: "Vanilla Dreams",
            price: 190,
            description: "A sweet oriental with Madagascar vanilla, tonka bean, and caramel.",
            image: "https://readdy.ai/api/search-image?query=Elegant%2520cream%2520colored%2520perfume%2520bottle%2520with%2520gold%2520accents%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520vanilla%2520bean%2520elements%2520creating%2520a%2520warm%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=12&orientation=portrait",
            scent: "Oriental"
        },
        {
            id: 11,
            name: "Citrus Splash",
            price: 155,
            description: "A vibrant fresh fragrance with lemon, grapefruit, and mandarin.",
            image: "https://readdy.ai/api/search-image?query=Bright%2520clear%2520glass%2520perfume%2520bottle%2520with%2520yellow%2520tinted%2520liquid%2520and%2520gold%2520cap%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520citrus%2520elements%2520creating%2520a%2520fresh%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=13&orientation=portrait",
            scent: "Fresh"
        },
        {
            id: 12,
            name: "Cedar Whisper",
            price: 225,
            description: "A sophisticated woody scent with cedar, vetiver, and light spices.",
            image: "https://readdy.ai/api/search-image?query=Elegant%2520brown%2520glass%2520perfume%2520bottle%2520with%2520wooden%2520cap%2520on%2520a%2520cream%2520colored%2520background%2520with%2520soft%2520lighting%2520and%2520subtle%2520cedar%2520wood%2520elements%2520creating%2520an%2520earthy%2520atmosphere%252C%2520luxury%2520product%2520photography%2520with%2520perfect%2520composition&width=500&height=600&seq=14&orientation=portrait",
            scent: "Woody"
        }
    ];

    // Filter products based on active filters
    const filteredProducts = products.filter(product => {
        const matchesScent = activeFilters.scent === 'All' || product.scent === activeFilters.scent;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesScent && matchesPrice;
    });

    // Sort products based on active sort
    let sortedProducts = [...filteredProducts];
    switch (activeFilters.sort) {
        case 'Price: High-Low':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'Price: Low-High':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'Newest':
            // In a real app, you would sort by date
            break;
        case 'Best Selling':
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
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Collection</h1>
                    <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Explore our exclusive collection of luxury fragrances, each crafted with the finest ingredients to express your unique personality.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
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
                                    <span>Scent: {activeFilters.scent}</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                                <div id="scentMenu" className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                                    <ul className="py-1">
                                        {['All', 'Floral', 'Oriental', 'Woody', 'Fresh'].map(scent => (
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
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-700">Price:</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-[#D4AF37]">{price}</span>
                                    <input
                                        type="number"
                                        id="minPrice"
                                        value={priceRange[0]}
                                        onChange={handlePriceChange}
                                        min="50"
                                        max={priceRange[1]}
                                        className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                                    />
                                    <span>-</span>
                                    <span className="text-[#D4AF37]">{price}</span>
                                    <input
                                        type="number"
                                        id="maxPrice"
                                        value={priceRange[1]}
                                        onChange={handlePriceChange}
                                        min={priceRange[0]}
                                        max="500"
                                        className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                                    />
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
                                    <span>Sort: {activeFilters.sort}</span>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </button>
                                <div id="sortMenu" className="absolute right-0 z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                                    <ul className="py-1">
                                        {['Featured', 'Price: High-Low', 'Price: Low-High', 'Newest', 'Best Selling'].map(sort => (
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
                                    <span>Show: {itemsPerPage}</span>
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
                    {(activeFilters.scent !== 'All' || priceRange[0] > 50 || priceRange[1] < 500) && (
                        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                            <span className="text-sm text-gray-600">Active Filters:</span>
                            {activeFilters.scent !== 'All' && (
                                <span className="bg-[#FDF6E9] text-[#D4AF37] text-sm px-3 py-1 rounded-full flex items-center">
                                    Scent: {activeFilters.scent}
                                    <button
                                        className="ml-2 text-[#D4AF37] hover:text-[#C9A227] cursor-pointer !rounded-button whitespace-nowrap"
                                        onClick={() => handleFilterChange('scent', 'All')}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </span>
                            )}
                            {(priceRange[0] > 50 || priceRange[1] < 500) && (
                                <span className="bg-[#FDF6E9] text-[#D4AF37] text-sm px-3 py-1 rounded-full flex items-center">
                                    Price: ${priceRange[0]} - ${priceRange[1]}
                                    <button
                                        className="ml-2 text-[#D4AF37] hover:text-[#C9A227] cursor-pointer !rounded-button whitespace-nowrap"
                                        onClick={() => setPriceRange([50, 500])}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </span>
                            )}
                            <button
                                className="text-sm text-gray-600 hover:text-[#D4AF37] ml-auto cursor-pointer !rounded-button whitespace-nowrap"
                                onClick={() => {
                                    setActiveFilters({ scent: 'All', sort: 'Featured' });
                                    setPriceRange([50, 500]);
                                }}
                            >
                                Clear All
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6 text-gray-600">
                    Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} products
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
                                            Quick View
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
                                    <p className="text-[#D4AF37] font-medium mb-3">${product.price.toFixed(2)}</p>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <button className="bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#C9A227] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            Add to Cart
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
                                        <p className="text-[#D4AF37] font-medium text-lg mb-4">${product.price.toFixed(2)}</p>
                                        <p className="text-gray-600 mb-6">{product.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="bg-[#D4AF37] text-white px-6 py-2 rounded hover:bg-[#C9A227] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            Add to Cart
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

            {/* Footer */}
            <footer className="bg-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-serif text-gray-900 mb-4">ESSENCE</h3>
                            <p className="text-gray-600 mb-4">
                                Luxury fragrances crafted to express your unique personality and elevate your everyday experiences.
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
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Shop</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">All Fragrances</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">New Arrivals</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Best Sellers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Gift Sets</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Our Story</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Craftsmanship</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Sustainability</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Care</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Contact Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Shipping & Returns</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">FAQ</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200 text-center">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} ESSENCE. All rights reserved.
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

export default Parfumes
