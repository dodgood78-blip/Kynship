import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <span className="section-label" style={{ color: 'rgba(200,166,70,0.9)' }}>ابدأ رحلتك معنا</span>
                    <h2 className={styles.title}>جاهز تبدأ مشروعك؟</h2>
                    <p className={styles.subtitle}>
                        نحن هنا لنحول أفكارك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية.
                    </p>
                    <div className={styles.actions}>
                        <a
                            href="https://wa.me/201000000000?text=أريد التواصل معكم"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold"
                        >
                            تواصل معنا الآن
                        </a>
                        <a href="/contact" className="btn-outline">
                            أرسل رسالة
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
