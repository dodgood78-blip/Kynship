import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'الرئيسية' },
        { href: '/portfolio', label: 'أعمالنا' },
        { href: '/contact', label: 'تواصل معنا' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                {/* Right side: WhatsApp + Book Button */}
                <div className={styles.rightSide}>
                    <a
                        href="https://wa.me/201000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                        aria-label="واتساب"
                    >
                        <FaWhatsapp size={22} />
                    </a>
                    <a
                        href="https://wa.me/201000000000?text=أريد حجز معاينة"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold"
                        style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                    >
                        احجز معاينة
                    </a>
                </div>

                {/* Center: Logo */}
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.logoText}>Kynship</span>
                        <span className={styles.logoAr}>كينشيب</span>
                    </Link>
                </div>

                {/* Left side: Menu */}
                <div className={styles.leftSide}>
                    <button
                        className={styles.menuBtn}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="القائمة"
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile / Slide-out Nav */}
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <div className={styles.navInner}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className={styles.navDivider} />
                    <a
                        href="https://wa.me/201000000000?text=أريد حجز معاينة"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold"
                        onClick={() => setMenuOpen(false)}
                    >
                        احجز معاينة مجانية
                    </a>
                </div>
            </nav>
            {menuOpen && (
                <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
            )}
        </header>
    );
}
