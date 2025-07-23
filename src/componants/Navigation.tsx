import { Leaf } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps){
    return(
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-700" />
              <span className="text-xl font-serif font-bold text-slate-800">Nordlys</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('menu')}
                className={`text-sm font-medium transition-colors ${activeSection === 'menu' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
              >
                Menu
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
}