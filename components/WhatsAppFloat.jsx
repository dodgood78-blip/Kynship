import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/201000000000?text=مرحبا، أريد الاستفسار عن خدماتكم"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.floatBtn}
            aria-label="تواصل عبر الواتساب"
        >
            <FaWhatsapp size={28} />
            <span className={styles.tooltip}>تواصل معنا</span>
        </a>
    );
}
