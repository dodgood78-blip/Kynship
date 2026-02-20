import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styles from '../../styles/ProjectDetail.module.css';

export default function ProjectDetailPage({ project }) {
    if (!project) {
        return (
            <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
                <h1>المشروع غير موجود</h1>
                <Link href="/portfolio" className="btn-gold" style={{ marginTop: 24, display: 'inline-block' }}>
                    العودة لمعرض الأعمال
                </Link>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{project.title} | كينشيب</title>
                <meta name="description" content={project.description} />
                <meta property="og:title" content={`${project.title} | كينشيب`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:type" content="article" />
            </Head>

            <div className={styles.page}>
                {/* Hero */}
                <div className={styles.hero}>
                    <div className={styles.heroOverlay} />
                    <div className={`container ${styles.heroContent}`}>
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.date}>تاريخ الإنجاز: {project.completionDate}</p>
                    </div>
                </div>

                {/* Content */}
                <section className="section">
                    <div className="container">
                        <div className={styles.layout}>
                            <div className={styles.main}>
                                <h2 className={styles.sectionTitle}>وصف المشروع</h2>
                                <div className="gold-divider" />
                                <p className={styles.description}>{project.description}</p>

                                {/* Image Gallery */}
                                <div className={styles.gallery}>
                                    {project.images && project.images.map((img, i) => (
                                        <div key={i} className={styles.imageSlot}>
                                            <div className={styles.imagePlaceholder}>
                                                <span>صورة {i + 1}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <aside className={styles.sidebar}>
                                <div className={styles.infoCard}>
                                    <h3>تفاصيل المشروع</h3>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>الفئة</span>
                                        <span>{project.category}</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <span className={styles.infoLabel}>تاريخ الإنجاز</span>
                                        <span>{project.completionDate}</span>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/201000000000?text=أريد مشروع مشابه"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-gold"
                                    style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
                                >
                                    أريد مشروع مشابه
                                </a>
                                <Link href="/portfolio" className="btn-outline-dark" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
                                    العودة للأعمال
                                </Link>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const contentDir = path.join(process.cwd(), 'content', 'projects');
    let paths = [];

    try {
        if (fs.existsSync(contentDir)) {
            const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.json'));
            paths = files.map((file) => {
                return { params: { id: file.replace(/\.json$/, '') } };
            });
        }
    } catch (err) {
        console.error('Error reading paths:', err);
    }

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const contentDir = path.join(process.cwd(), 'content', 'projects');
    let project = null;

    try {
        const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.json'));
        for (const file of files) {
            const id = file.replace(/\.json$/, '');
            if (id === params.id) {
                const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
                project = { ...JSON.parse(raw), id };
                break;
            }
        }
    } catch (err) {
        console.error('Error reading project:', err);
    }

    return { props: { project } };
}
