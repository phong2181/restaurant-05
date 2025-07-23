import { useState } from "react";
import { Dish } from "../Types/Dish";
import { X } from "lucide-react";

interface DetailsProps{
    dish : Dish
    onClose: () => void;
}

export default function Details({ } : DetailsProps){
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    const closeDishDetails = () => {
        setSelectedDish(null);
    };
    return(
        <>
            {selectedDish && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="h-64 overflow-hidden">
                    <img 
                        src={selectedDish.image} 
                        alt={selectedDish.name}
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                        <h3 className="text-3xl font-serif font-bold text-emerald-700">{selectedDish.name}</h3>
                        {selectedDish.danishName && <p className="text-lg font-medium text-gray-600 italic">{selectedDish.danishName}</p>}
                        <p className="text-2xl font-bold text-emerald-700 mt-2">{selectedDish.price}</p>
                        </div>
                        <button 
                        onClick={closeDishDetails}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                        <X className="h-6 w-6" />
                        </button>
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                        <h4 className="text-lg font-serif font-bold text-slate-800 mb-2">Description</h4>
                        <p className="text-gray-700">{selectedDish.description}</p>
                        </div>
                        
                        {selectedDish.story && (
                        <div>
                            <h4 className="text-lg font-serif font-bold text-slate-800 mb-2">Our Story</h4>
                            <p className="text-gray-700">{selectedDish.story}</p>
                        </div>
                        )}
                        
                        <div>
                        <h4 className="text-lg font-serif font-bold text-slate-800 mb-2">Ingredients</h4>
                        <p className="text-gray-700">{selectedDish.ingredients}</p>
                        </div>
                        
                        {selectedDish.pairing && (
                        <div>
                            <h4 className="text-lg font-serif font-bold text-slate-800 mb-2">Recommended Pairing</h4>
                            <p className="text-gray-700">{selectedDish.pairing}</p>
                        </div>
                        )}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <button 
                        onClick={closeDishDetails}
                        className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            )}
        
        </>
    )
}