import styles from './TrustSection.module.css';

const trustItems = [
    {
        id: 1,
        icon: '🏗️',
        title: 'تصميم 3D قبل التنفيذ',
        desc: 'نقدم لك رؤية كاملة بالتفاصيل قبل البدء في التنفيذ',
    },
    {
        id: 2,
        icon: '🔍',
        title: 'معاينة مجانية',
        desc: 'فريقنا يزورك في المنزل لتقييم المساحة ووضع أفضل الحلول',
    },
    {
        id: 3,
        icon: '✅',
        title: 'ضمان على الخامات',
        desc: 'نستخدم أجود الخامات مع ضمان شامل يطمئنك على استثمارك',
    },
    {
        id: 4,
        icon: '🛠️',
        title: 'خدمة ما بعد البيع',
        desc: 'دعم فني متواصل وصيانة دورية لضمان سلامة منتجاتك',
    },
];

export default function TrustSection() {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">لماذا كينشيب</span>
                    <h2 className="section-title">مميزاتنا</h2>
                    <div className="gold-divider" />
                </div>
                <div className={styles.grid}>
                    {trustItems.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.iconWrap}>
                                <span className={styles.icon}>{item.icon}</span>
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
