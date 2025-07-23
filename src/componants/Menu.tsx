import { ArrowRight } from "lucide-react";
import { Dish } from "../Types/Dish";
import { menuData } from "../Data/menu";

interface MenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onViewDetails: (dish: Dish) => void;
}

export default function Menu({ activeSection, setActiveSection, onViewDetails}: MenuProps){
    if (activeSection !== "menu") return null;
    const openDishDetails = (dish: Dish) => {
        onViewDetails(dish);
    };
    return(
        <>
            {activeSection === 'menu' && (
                <section className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Our Menu</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover authentic Danish cuisine crafted with the finest local ingredients
                    </p>
                    </div>

                    {/* Starters */}
                    <div className="mb-16">
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-b-2 border-emerald-700 pb-2">
                        Starters
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuData.filter(dish => dish.category === 'starter').map((dish) => (
                        <div key={dish.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-40 overflow-hidden">
                            <img 
                                src={dish.image} 
                                alt={dish.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            </div>
                            <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                <h4 className="text-lg font-serif font-bold text-gray-900">{dish.name}</h4>
                                {dish.danishName && <p className="text-xs font-medium text-emerald-700 italic">{dish.danishName}</p>}
                                </div>
                                <span className="text-lg font-bold text-emerald-700">{dish.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{dish.description}</p>
                            <p className="text-xs text-gray-500 mb-3">
                                <strong>Ingredients:</strong> {dish.ingredients}
                            </p>
                            <button 
                                onClick={() => openDishDetails(dish)}
                                className="bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2"
                            >
                                View Details <ArrowRight className="h-3 w-3" />
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Main Courses */}
                    <div className="mb-16">
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-b-2 border-emerald-700 pb-2">
                        Main Courses
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuData.filter(dish => dish.category === 'main').map((dish) => (
                        <div key={dish.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-40 overflow-hidden">
                            <img 
                                src={dish.image} 
                                alt={dish.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            </div>
                            <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                <h4 className="text-lg font-serif font-bold text-gray-900">{dish.name}</h4>
                                {dish.danishName && <p className="text-xs font-medium text-emerald-700 italic">{dish.danishName}</p>}
                                </div>
                                <span className="text-lg font-bold text-emerald-700">{dish.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{dish.description}</p>
                            <p className="text-xs text-gray-500 mb-3">
                                <strong>Ingredients:</strong> {dish.ingredients}
                            </p>
                            <button 
                                onClick={() => openDishDetails(dish)}
                                className="bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2"
                            >
                                View Details <ArrowRight className="h-3 w-3" />
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Desserts */}
                    <div className="mb-16">
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-b-2 border-emerald-700 pb-2">
                        Desserts
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuData.filter(dish => dish.category === 'dessert').map((dish) => (
                        <div key={dish.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-40 overflow-hidden">
                            <img 
                                src={dish.image} 
                                alt={dish.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            </div>
                            <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                <h4 className="text-lg font-serif font-bold text-gray-900">{dish.name}</h4>
                                {dish.danishName && <p className="text-xs font-medium text-emerald-700 italic">{dish.danishName}</p>}
                                </div>
                                <span className="text-lg font-bold text-emerald-700">{dish.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{dish.description}</p>
                            <p className="text-xs text-gray-500 mb-3">
                                <strong>Ingredients:</strong> {dish.ingredients}
                            </p>
                            <button 
                                onClick={() => openDishDetails(dish)}
                                className="bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2"
                            >
                                View Details <ArrowRight className="h-3 w-3" />
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Beverages */}
                    <div>
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-b-2 border-emerald-700 pb-2">
                        Beverages
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Local Craft Beer</h4>
                        <p className="text-emerald-700 font-bold">55 DKK/glass</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Elderflower Sparkler</h4>
                        <p className="text-emerald-700 font-bold">35 DKK</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Organic Filter Coffee</h4>
                        <p className="text-emerald-700 font-bold">30 DKK</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Akvavit Shot</h4>
                        <p className="text-emerald-700 font-bold">45 DKK</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Natural Danish Cider</h4>
                        <p className="text-emerald-700 font-bold">50 DKK</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            )}
        </>
    )
}