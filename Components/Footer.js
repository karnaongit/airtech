import styles from '../app/styles/Footer.module.css'; // Import the CSS module
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = ({ isScrolled }) => {
  return (
    <footer
      className={`${styles.footer} ${
        isScrolled ? styles.footerScrolled : styles.footerNotScrolled
      }`}
    >
      <div className={styles.container}>
        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-3xl font-bold">Airtech</h2>
          <p className="mt-2 text-lg">"Crafting quality that strengthens industries"</p>
          <p className="text-sm opacity-75">Founded in 20--</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className={styles.quickLinks}>
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/About' },
              { name: 'Product', path: '/Product' },
              { name: 'Contact', path: '/Contact' },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link href={path} className={styles.link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-lg">
            Five Star MIDC Shendra, AURANGABAD,
            <br />
            MAHARASHTRA, 431007, INDIA
          </p>
          <p className="text-lg">
            Email:{' '}
            <a href="contact@airtechsailon.com" className={styles.link}>
              contact@airtechsailon.com
            </a>
          </p>
          <p className="text-lg">
            Phone:{' '}
            <a
              href="https://wa.me/917972351030"
              className={`${styles.link} text-blue-500 hover:text-blue-700`}
            >
              +91 7972351030
            </a>
          </p>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
          <div className={styles.socialMedia}>
            <a href="#" className={styles.link}>
              <FaFacebookF size={24} />
            </a>
            <a href="#" className={styles.link}>
              <FaTwitter size={24} />
            </a>
            <a href="#" className={styles.link}>
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className={styles.link}>
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/917972351030" className={styles.link}>
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Centered */}
      <div className="border-t border-gray-700 py-4 text-center text-lg">
        &copy; {new Date().getFullYear()} Airtech. All rights reserved.
      </div>

      {/* Made by Karan Gawande at Bottom */}
      <div className="text-center text-sm opacity-75 pb-4">
        Made by{' '}
        <a href="https://wa.me/917757907323" className="underline">
          Karan Gawande
        </a>
      </div>
    </footer>
  );
};

export default Footer;