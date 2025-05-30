import { useState, useEffect } from 'react';
import Nav from './nav';
const Contact = ({ handlePageChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 3000);
    };
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

            {/* Main Content */}
            <main className="container mx-auto px-4 py-20">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">Nous Contacter</h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Nous serions ravis de vous entendre ! Que vous ayez des questions, des commentaires ou souhaitiez collaborer,
                        notre équipe est là pour vous aider.
                    </p>
                </section>

                {/* Contact Form */}
                <section className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none text-gray-800"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none text-gray-800"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none text-gray-800"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none text-gray-800"
                                required
                            ></textarea>
                        </div>

                        {isFormSubmitted && (
                            <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                                Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#D4AF37] text-white py-3 px-6 rounded-lg hover:bg-[#C9A227] transition-colors duration-300 font-semibold text-lg"
                        >
                            Envoyer le Message
                        </button>
                    </form>
                </section>

                {/* Contact Information */}
                <section className="mt-16 text-center">
                    <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">Get in Touch</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Email</h3>
                            <p className="text-gray-700">contact@essenceperfumes.com</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Phone</h3>
                            <p className="text-gray-700">+1 (555) 123-4567</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Address</h3>
                            <p className="text-gray-700">123 Fragrance Avenue, Paris, France</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
