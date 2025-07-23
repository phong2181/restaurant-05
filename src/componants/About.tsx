
interface AboutProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function About({ activeSection , } : AboutProps){
    return(
        <>
            {activeSection === 'about' && (
                <section className="pt-24 pb-16 bg-gradient-to-br from-stone-100 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">About Nordlys</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bringing the essence of Denmark's natural beauty to your table
                    </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">Our Philosophy</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                        Nordlys brings the essence of Denmark's wild coasts, forests, and farmlands to the table, 
                        focusing on fresh, local, and seasonal ingredients prepared with clean Nordic techniques. 
                        Our name, meaning "Northern Light," reflects our commitment to illuminating the natural 
                        flavors of Danish cuisine.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                        Every dish tells a story of Danish tradition, from our house-smoked salmon to our 
                        innovative rye bread ice cream. We believe in the power of simplicity, quality, 
                        and the warm hospitality that defines Danish culture.
                        </p>
                        
                        <h4 className="text-xl font-serif font-bold text-slate-800 mb-4">Restaurant Design</h4>
                        <ul className="space-y-2 text-gray-600">
                        <li>• Minimalist pale wood furniture and linen tablecloths</li>
                        <li>• Handmade ceramic plates and warm pendant lighting</li>
                        <li>• Large windows for natural daylight</li>
                        <li>• Indoor plants for fresh, organic atmosphere</li>
                        <li>• Open kitchen concept for culinary transparency</li>
                        <li>• Wildflowers and beeswax candles for authentic hygge</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h4 className="text-2xl font-serif font-bold text-emerald-700 mb-6">Signature Ingredients</h4>
                        <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                            <span className="text-gray-700">North Atlantic smoked salmon</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                            <span className="text-gray-700">Authentic Danish rugbrød (rye bread)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                            <span className="text-gray-700">Fresh North Sea plaice and herring</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                            <span className="text-gray-700">Local Danish free-range pork</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                            <span className="text-gray-700">Foraged juniper berries and sea buckthorn</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                            <span className="text-gray-700">Seasonal root vegetables from Danish farms</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            )}
        </>
    )
}