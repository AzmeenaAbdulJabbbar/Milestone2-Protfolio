import React from 'react';  
import Link from 'next/link';  
import { Menu } from 'lucide-react';  
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';  

const Header: React.FC = () => {  
    return (  
        <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white shadow-lg fixed top-0 left-0 w-full z-50 py-3">  
            <div className="container mx-auto px-6 flex justify-between items-center">  
                
                {/* Centered Logo on Desktop */}  
                <div className="flex-1 lg:hidden"></div> {/* Placeholder for flex centering */}
                <Link href="/" className="text-3xl font-extrabold text-white mx-auto hover:text-pink-400 transition-all duration-300">Azmeena</Link>  
                <div className="hidden lg:block flex-1"></div> {/* Placeholder to center on large screens */}
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">  
                    {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`} className="text-lg font-medium text-white hover:text-pink-400 transition-all duration-300">  
                            {item}
                        </Link>  
                    ))}
                </nav>  

                {/* Mobile Menu Trigger */}
                <Sheet>  
                    <SheetTrigger className="lg:hidden text-white text-2xl hover:text-pink-400 transition-all duration-300">  
                        <Menu />  
                    </SheetTrigger>  

                    <SheetContent side="left" className="p-6 bg-gradient-to-b from-blue-900 to-purple-900 text-white w-3/4 h-full">  
                        <div className="text-center">
                            <Link href="/" className="text-3xl font-extrabold text-white hover:text-pink-400 transition-all duration-300 mb-8 block">Azmeena</Link>  
                        </div>
                        <ul className="space-y-6 text-center">  
                            {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>  
                                    <Link href={`/${item.toLowerCase()}`} className="block text-lg font-medium text-white hover:text-pink-400 transition-all duration-300">  
                                        {item}
                                    </Link>  
                                </li>  
                            ))}
                        </ul>  
                    </SheetContent>  
                </Sheet>  
            </div>  
        </header>  
    );  
};  

export default Header;
