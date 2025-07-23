import { Leaf } from "lucide-react";

export default function Footer(){
    return(
        <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-emerald-400" />
                <span className="text-xl font-serif font-bold">Nordlys</span>
              </div>
              <p className="text-gray-400">
                Authentic Nordic dining experience in the heart of Copenhagen.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Nyhavn 42, 1051 Copenhagen K</p>
                <p>+45 33 12 34 56</p>
                <p>reservation@nordlys.dk</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Tuesday - Sunday</p>
                <p>12:00 - 15:00</p>
                <p>18:00 - 22:00</p>
                <p className="text-emerald-400">Closed Mondays</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nordlys. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}