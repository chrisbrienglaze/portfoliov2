import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-2" />
                  <a href="mailto:chrisbrien.glaze@gmail.com" className="hover:text-blue-600">chrisbrien.glaze@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-blue-600 mr-2" />
                  <a href="tel:+1234567890" className="hover:text-blue-600">+1 (111) 000-0000</a>
                </li>
                <li className="flex items-center">
                  <MapPin size={20} className="text-blue-600 mr-2" />
                  <span>Ontario, Canada</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send me a Message</h3>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md" required />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md" required />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Your Message" rows={4} className="w-full px-3 py-2 border rounded-md" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;