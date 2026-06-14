import { useState } from 'react';
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Valuation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Context / Value Prop */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Discover Your Property's <span className="text-secondary">True Rental Potential</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Don't leave money on the table. Our expert team leverages local market data and years of experience to provide an accurate, high-yield valuation for your property.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Data-Driven Insights', desc: 'We compare your property against live market comparables to ensure competitive, maximum pricing.' },
                { title: 'Yield Optimisation Advice', desc: 'Receive actionable tips on minor improvements that can significantly increase your monthly return.' },
                { title: 'Zero Obligation', desc: 'Your free valuation comes with absolutely no commitment to use our services.' }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center">
                   <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Already have a portfolio?</p>
                  <p className="text-gray-600 text-sm">We offer free whole-portfolio performance reviews.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Received</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you. One of our senior property managers will be in touch within 24 hours to discuss your valuation.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-secondary font-medium hover:underline"
                  >
                    Submit another property
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-2">Request Your Free Valuation</h3>
                  <p className="text-gray-500 mb-8">Fill out the details below and we'll get straight back to you.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Adddress</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Property Postcode</label>
                      <input type="text" id="postcode" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                        <select id="type" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                          <option>Flat / Apartment</option>
                          <option>Terraced House</option>
                          <option>Semi-Detached</option>
                          <option>Detached</option>
                          <option>HMO</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                        <select id="bedrooms" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                          <option>Studio</option>
                          <option>1 Bed</option>
                          <option>2 Beds</option>
                          <option>3+ Beds</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>Get My Valuation</span>
                      <ArrowRight className="w-5 h-5 text-white/80" />
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our Privacy Policy. We will never share your details.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
