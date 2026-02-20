import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />
            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>مطابخ وغرف ملابس فاخرة</div>
                <h1 className={styles.headline}>
                    نصمم مساحتك…<br />
                    <span className={styles.accent}>بدقة في كل تفصيلة.</span>
                </h1>
                <p className={styles.subtext}>
                    مطابخ وغرف ملابس بتصميم مخصص وجودة تدوم.
                </p>
                <div className={styles.ctas}>
                    <a
                        href="https://wa.me/201000000000?text=أريد طلب معاينة مجانية"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold"
                    >
                        اطلب معاينة مجانية
                    </a>
                    <Link href="/portfolio" className="btn-outline">
                        استكشف أعمالنا
                    </Link>
                </div>
            </div>
            <div className={styles.scrollHint}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
