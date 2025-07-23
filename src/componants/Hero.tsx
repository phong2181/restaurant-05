import { ArrowRight, ChefHat, Leaf, Star } from "lucide-react";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps){
    return(
        <>
                <section className="pt-16 bg-gradient-to-br from-stone-100 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-800 mb-6">
                        Nordlys
                    </h1>
                    <p className="text-lg text-emerald-700 font-medium mb-4">Northern Light</p>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Experience the essence of Denmark's wild coasts, forests, and farmlands through 
                        fresh, local, and seasonal ingredients prepared with clean Nordic techniques.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                        onClick={() => setActiveSection('menu')}
                        className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
                        >
                        Explore Menu <ArrowRight className="h-4 w-4" />
                        </button>
                        <button 
                        onClick={() => setActiveSection('contact')}
                        className="border border-emerald-700 text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
                        >
                        Book a Table
                        </button>
                    </div>
                    </div>
                </div>
                
                {/* Features */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <Leaf className="h-12 w-12 text-emerald-700 mx-auto mb-4" />
                        <h3 className="text-xl font-serif font-bold mb-2">Local & Seasonal</h3>
                        <p className="text-gray-600">Fresh ingredients sourced from Danish farms and coastal waters</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <ChefHat className="h-12 w-12 text-emerald-700 mx-auto mb-4" />
                        <h3 className="text-xl font-serif font-bold mb-2">Nordic Techniques</h3>
                        <p className="text-gray-600">Traditional Danish cooking methods with modern presentation</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <Star className="h-12 w-12 text-emerald-700 mx-auto mb-4" />
                        <h3 className="text-xl font-serif font-bold mb-2">Hygge Atmosphere</h3>
                        <p className="text-gray-600">Warm, minimalist design with natural materials and candlelight</p>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}