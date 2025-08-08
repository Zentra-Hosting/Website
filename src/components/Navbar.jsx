import { useState } from "react";
import {
    Menu
} from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <img src={"https://raw.githubusercontent.com/Zentra-Hosting/Website/refs/heads/main/src/assets/logo.svg"} width={35} />
                        <span className="text-xl font-bold text-white">Zentra Hosting</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                        <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                        <a href="#support" className="text-slate-300 hover:text-white transition-colors">Support</a>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                            Get Started
                        </button>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-4 py-4 space-y-4">
                        <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
                        <a href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
                        <a href="#support" className="block text-slate-300 hover:text-white">Support</a>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar