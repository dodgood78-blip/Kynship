import Link from 'next/link';
import styles from './CategoriesSection.module.css';

const categories = [
    {
        id: 'kitchens',
        title: 'مطابخ',
        subtitle: 'تصاميم عصرية وكلاسيكية',
        image: '/images/cat-kitchen.jpg',
        href: '/portfolio?category=مطابخ',
        bg: '#1B3A52',
    },
    {
        id: 'wardrobes',
        title: 'غرف ملابس',
        subtitle: 'تنظيم مثالي وأناقة فائقة',
        image: '/images/cat-wardrobe.jpg',
        href: '/portfolio?category=غرف ملابس',
        bg: '#213E56',
    },
    {
        id: 'tv-units',
        title: 'وحدات تلفزيون',
        subtitle: 'تصاميم مخصصة لكل مساحة',
        image: '/images/cat-tv.jpg',
        href: '/portfolio?category=وحدات تلفزيون',
        bg: '#1F3447',
    },
    {
        id: 'special',
        title: 'تصميمات خاصة',
        subtitle: 'أفكارك بلمستنا الاحترافية',
        image: '/images/cat-special.jpg',
        href: '/portfolio?category=تصميمات خاصة',
        bg: '#25384A',
    },
];

export default function CategoriesSection() {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">تخصصاتنا</span>
                    <h2 className="section-title">خدماتنا</h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">
                        نقدم حلولاً متكاملة لتصميم وتنفيذ مساحاتك الداخلية بأعلى معايير الجودة
                    </p>
                </div>
                <div className={styles.grid}>
                    {categories.map((cat) => (
                        <Link href={cat.href} key={cat.id} className={styles.card}>
                            <div className={styles.imageWrap} style={{ background: cat.bg }}>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.placeholderIcon}>◻</span>
                                </div>
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                                <p className={styles.cardSub}>{cat.subtitle}</p>
                                <span className={styles.arrow}>←</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
