import React, { useState } from 'react';
import { ChefHat, Wine, Star, Clock, MapPin, Phone, Mail, Users, ArrowRight, X, Leaf } from 'lucide-react';

interface Dish {
  id: string;
  name: string;
  danishName?: string;
  price: string;
  description: string;
  ingredients: string;
  category: string;
  image: string;
  story?: string;
  pairing?: string;
}

const menuData: Dish[] = [
  {
    id: 'smoked-salmon-smorrebrod',
    name: 'Smørrebrød with Smoked Salmon',
    price: '95 DKK',
    description: 'Classic Danish open-faced rye bread with house-smoked salmon, pickled cucumber, and fresh herbs.',
    ingredients: 'Rugbrød (rye bread), smoked North Atlantic salmon, pickled cucumber, dill, crème fraîche, lemon zest',
    category: 'starter',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'A quintessential Danish tradition, our smørrebrød features house-smoked salmon from the North Atlantic, served on authentic rugbrød with the perfect balance of creamy and tangy accompaniments.',
    pairing: 'Pairs beautifully with Danish craft beer or elderflower sparkler'
  },
  {
    id: 'herring-curry-smorrebrod',
    name: 'Pickled Herring & Curry Salad Smørrebrød',
    price: '85 DKK',
    description: 'Traditional rye bread with pickled herring, mild curry salad, and crispy shallots.',
    ingredients: 'Pickled herring fillet, curry mayo, apple, shallots, rye bread, chives',
    category: 'starter',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'This classic Danish combination brings together the rich tradition of pickled herring with a mild curry salad, creating a perfect harmony of flavors on our homemade rye bread.',
    pairing: 'Excellent with akvavit or a crisp Danish cider'
  },
  {
    id: 'beetroot-goat-cheese',
    name: 'Beetroot & Goat Cheese Salad',
    price: '90 DKK',
    description: 'Roasted beets with whipped local goat cheese, candied walnuts, and apple vinaigrette.',
    ingredients: 'Roasted Danish beets, goat cheese, walnuts, honey, crisp apple slices, rapeseed oil',
    category: 'starter',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Celebrating the earthy flavors of Danish soil, this salad features locally grown beets and artisanal goat cheese, enhanced with the sweetness of candied walnuts.',
    pairing: 'Complements perfectly with natural Danish cider'
  },
  {
    id: 'pan-fried-plaice',
    name: 'Pan-Fried Plaice with Remoulade',
    price: '145 DKK',
    description: 'North Sea plaice fillet lightly breaded and pan-fried, served with remoulade and new potatoes.',
    ingredients: 'Fresh plaice fillet, breadcrumbs, eggs, baby potatoes, Danish remoulade (pickles, capers, mayo, herbs)',
    category: 'main',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Fresh from the North Sea, our plaice is prepared with traditional Danish techniques and served with our signature remoulade made from locally sourced ingredients.',
    pairing: 'Exceptional with local craft beer or white wine'
  },
  {
    id: 'pork-frikadeller',
    name: 'Free-Range Pork Frikadeller',
    price: '135 DKK',
    description: 'Traditional Danish pork meatballs served with parsley sauce and buttery mashed potatoes.',
    ingredients: 'Danish free-range pork mince, onion, eggs, flour, butter, potatoes, fresh parsley, cream',
    category: 'main',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'A beloved Danish comfort food, our frikadeller are made from ethically raised pork and served with the traditional accompaniments that have graced Danish tables for generations.',
    pairing: 'Perfect with Danish craft beer or red wine'
  },
  {
    id: 'venison-root-vegetables',
    name: 'Venison with Root Vegetables & Juniper Jus',
    price: '210 DKK',
    description: 'Roast venison loin with seasonal root vegetables and juniper berry sauce.',
    ingredients: 'Local venison loin, carrots, parsnips, celeriac, juniper berries, red wine, butter, thyme',
    category: 'main',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Sourced from Danish forests, our venison represents the wild heart of Nordic cuisine, enhanced with foraged juniper berries and seasonal root vegetables.',
    pairing: 'Magnificent with full-bodied red wine or akvavit'
  },
  {
    id: 'aebleskiver',
    name: 'Æbleskiver with Berry Compote',
    price: '70 DKK',
    description: 'Fluffy Danish pancake balls dusted with powdered sugar, served with warm berry compote.',
    ingredients: 'Eggs, flour, sugar, buttermilk, butter, powdered sugar, mixed berries, lemon zest',
    category: 'dessert',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'A cherished Danish tradition, especially during Christmas, these spherical pancakes are cooked in a special pan and represent the warmth of Danish hospitality.',
    pairing: 'Delightful with organic filter coffee or elderflower sparkler'
  },
  {
    id: 'rye-bread-ice-cream',
    name: 'Rye Bread Ice Cream with Sea Buckthorn',
    price: '75 DKK',
    description: 'House-made rye bread ice cream topped with tangy sea buckthorn sauce and caramel shards.',
    ingredients: 'Rye breadcrumbs, cream, sugar, eggs, sea buckthorn berries, caramel',
    category: 'dessert',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'An innovative dessert that transforms Denmark\'s beloved rye bread into a creamy ice cream, topped with foraged sea buckthorn from the Danish coast.',
    pairing: 'Wonderful with organic filter coffee or dessert wine'
  }
];

function App() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const openDishDetails = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const closeDishDetails = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-gray-900">
      {/* Navigation */}
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

      {/* Hero Section */}
      {activeSection === 'home' && (
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
      )}

      {/* Menu Section */}
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

      {/* About Section */}
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

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Contact & Reservations</h2>
              <p className="text-xl text-gray-600">
                Book your table for an authentic Nordic dining experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-emerald-700" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">Nyhavn 42, 1051 Copenhagen K, Denmark</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-emerald-700" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+45 33 12 34 56</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-emerald-700" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">reservation@nordlys.dk</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-emerald-700" />
                    <div>
                      <p className="font-medium text-gray-900">Opening Hours</p>
                      <p className="text-gray-600">Tue-Sun: 12:00-15:00, 18:00-22:00</p>
                      <p className="text-gray-600">Closed Mondays</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                  <h4 className="text-lg font-serif font-bold text-emerald-700 mb-3">Hygge Dining Experience</h4>
                  <p className="text-gray-700 leading-relaxed">
                    At <em>Nordlys</em>, guests enjoy an intimate, calming atmosphere with minimalist Nordic design 
                    and an open view of the chef's counter. Each dish is plated like a piece of Danish nature — 
                    fresh, simple, elegant. Seasonal flowers, soft jazz, and flickering candles complete the 
                    cozy hygge mood that makes every meal memorable.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Book a Table</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent">
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                        <option>14:30</option>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent">
                      <option>1 person</option>
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5 people</option>
                      <option>6 people</option>
                      <option>7+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                    <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent" placeholder="Dietary restrictions, table preferences, special occasion..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    Confirm Reservation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dish Details Modal */}
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

      {/* Footer */}
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
    </div>
  );
}

export default App;