import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <div className={styles.logoText}>Kynship</div>
                    <div className={styles.logoAr}>كينشيب</div>
                    <p className={styles.tagline}>نصمم مساحتك بدقة في كل تفصيلة</p>
                </div>

                {/* Links */}
                <div className={styles.links}>
                    <h4 className={styles.colTitle}>روابط سريعة</h4>
                    <Link href="/">الرئيسية</Link>
                    <Link href="/portfolio">أعمالنا</Link>
                    <Link href="/contact">تواصل معنا</Link>
                    <a href="/admin">لوحة الإدارة</a>
                </div>

                {/* Contact */}
                <div className={styles.contact}>
                    <h4 className={styles.colTitle}>تواصل معنا</h4>
                    <div className={styles.contactItem}>
                        <MdLocationOn size={18} />
                        <span>الزقازيق، محافظة الشرقية، مصر</span>
                    </div>
                    <div className={styles.contactItem}>
                        <MdPhone size={18} />
                        <span>+20 100 000 0000</span>
                    </div>
                    <div className={styles.contactItem}>
                        <MdEmail size={18} />
                        <span>info@kynship.com</span>
                    </div>
                </div>

                {/* Social */}
                <div className={styles.social}>
                    <h4 className={styles.colTitle}>تابعنا</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Kynship. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}
