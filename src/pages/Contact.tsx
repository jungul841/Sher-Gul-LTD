import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300">
            Whether you're a landlord looking for premium management or a tenant seeking your next home, our team is here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Office</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">01274 457577</p>
                  <p className="text-sm text-gray-500 mt-1">24/7 Emergency Line available for managed properties</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@shergul.com</p>
                  <p className="text-gray-600">maintenance@shergul.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                   <ul className="text-gray-600 space-y-1">
                     <li className="flex justify-between w-56"><span>Monday:</span> <span>09:00 - 17:00</span></li>
                     <li className="flex justify-between w-56"><span>Tuesday:</span> <span>09:00 - 17:00</span></li>
                     <li className="flex justify-between w-56"><span>Wednesday:</span> <span>09:00 - 17:00</span></li>
                     <li className="flex justify-between w-56"><span>Thursday:</span> <span>09:00 - 17:00</span></li>
                     <li className="flex justify-between w-56"><span>Friday:</span> <span>09:00 - 17:00</span></li>
                     <li className="flex justify-between w-56"><span>Saturday:</span> <span>09:00 - 17:00</span></li>
                     <li className="flex justify-between w-56"><span>Sunday:</span> <span>Closed</span></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
               <div className="text-center py-12">
                 <p className="text-xl text-green-600 font-semibold mb-2">Message Sent!</p>
                 <p className="text-gray-600">We will respond to your query shortly.</p>
                 <button onClick={() => setIsSubmitted(false)} className="mt-6 text-secondary hover:underline">Send another</button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">Nature of Enquiry</label>
                  <select id="enquiryType" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white">
                    <option>Property Management Services</option>
                    <option>Tenant Find Services</option>
                    <option>I am a Current Tenant (Maintenance)</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-md transition-all shadow-md">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
