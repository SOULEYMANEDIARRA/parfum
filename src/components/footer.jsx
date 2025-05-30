import { faSearch, faTimes, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faFacebookF,
    faPinterestP,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcPaypal
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

// Add all icons to the library
library.add(
    faSearch,
    faTimes,
    faShoppingBag,
    faBars,
    faInstagram,
    faFacebookF,
    faPinterestP,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcPaypal
);
export default function Footer({ }) {
    return (
        <footer className="bg-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-serif text-gray-900 mb-4">ESSENCE</h3>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate eveniet voluptatum nobis quos soluta nam laborum. Cumque quae veritatis et cupiditate voluptatum quaerat dolorum quod commodi culpa at. Odit.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Magasin</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Tous les parfums</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Nouveaux arrivages</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Meilleures ventes</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Ensembles cadeaux</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">A propos</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Notre histoire</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Durabilité</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Presse</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Service client</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Contactez-nous</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Livraison & Retours</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">FAQ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} ESSENCE. Tous droits réservés.
                    </p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <FontAwesomeIcon icon={faCcVisa} />
                        <FontAwesomeIcon icon={faCcMastercard} />
                        <FontAwesomeIcon icon={faCcAmex} />
                        <FontAwesomeIcon icon={faCcPaypal} />
                    </div>
                </div>
            </div>
        </footer>
    )
}