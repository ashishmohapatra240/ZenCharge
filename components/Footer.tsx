import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 lg:grid-cols-4">
        
        {/* Email Notification */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full max-w-md px-4 py-2 rounded-md text-black border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
            />
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100"
            >
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-white/60 font-normal">
            <a href="mailto:contact@zencharge.com" className="hover:text-white transition-colors">contact@zencharge.com</a>
          </p>
          <p className="text-white/60 font-normal">
            <a href="tel:+1234567890" className="hover:text-white transition-colors">(+123) 456 7890</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-left">
        <p className="text-white text-base font-normal">
          © 2024 ZenCharge
        </p>
      </div>
    </footer>
  );
}
