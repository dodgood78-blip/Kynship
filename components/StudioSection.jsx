import styles from './StudioSection.module.css';

export default function StudioSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <span className={styles.label}>استوديو التصميم</span>
                        <h2 className={styles.title}>Kynship Design Studio</h2>
                        <div className={styles.goldLine} />
                        <p className={styles.text}>
                            فريقنا يساعدك من أول فكرة لحد التسليم. استشارة احترافية تضمن أفضل استغلال للمساحة
                            وتحقيق كل تفاصيل حلمك بدقة متناهية وجودة لا تضاهى.
                        </p>
                        <ul className={styles.features}>
                            <li>✦ تصميم ثلاثي الأبعاد قبل التنفيذ</li>
                            <li>✦ مواد خامات عالية الجودة</li>
                            <li>✦ التسليم في الوقت المحدد</li>
                            <li>✦ ضمان شامل على جميع المنتجات</li>
                        </ul>
                        <a
                            href="https://wa.me/201000000000?text=أريد حجز استشارة تصميم"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold"
                        >
                            احجز استشارة الآن
                        </a>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.visualGrid}>
                            {[1, 2, 3, 4].map((n) => (
                                <div key={n} className={styles.visualItem} style={{ animationDelay: `${n * 0.1}s` }}>
                                    <div className={styles.visualInner} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
