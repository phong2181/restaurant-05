import { Clock, Mail, MapPin, Phone, Users } from "lucide-react";
import { useState } from "react";

export default function Contact(){
    return(
        <>
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
        </>
    )
}