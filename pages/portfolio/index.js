import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/Portfolio.module.css';

export default function PortfolioPage({ projects }) {
    return (
        <>
            <Head>
                <title>أعمالنا | كينشيب</title>
                <meta
                    name="description"
                    content="استعرض مشاريع كينشيب - مطابخ وغرف ملابس ووحدات تلفزيون بتصميمات فاخرة في مصر."
                />
                <meta property="og:title" content="أعمالنا | كينشيب" />
                <meta property="og:type" content="website" />
            </Head>

            <div className={styles.page}>
                {/* Header */}
                <div className={styles.pageHeader}>
                    <div className="container">
                        <span className="section-label">معرض الأعمال</span>
                        <h1 className={styles.pageTitle}>أعمالنا</h1>
                        <div className="gold-divider" />
                        <p className={styles.pageSub}>
                            مجموعة من أعمالنا المتميزة في تصميم وتنفيذ المطابخ وغرف الملابس
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <section className="section">
                    <div className="container">
                        {projects.length === 0 ? (
                            <div className={styles.empty}>
                                <p>لا توجد مشاريع حتى الآن. سيتم إضافتها قريباً.</p>
                            </div>
                        ) : (
                            <div className={styles.grid}>
                                {projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const contentDir = path.join(process.cwd(), 'content', 'projects');
    let projects = [];

    try {
        if (fs.existsSync(contentDir)) {
            const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.json'));
            projects = files.map((file) => {
                const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
                const data = JSON.parse(raw);
                return { ...data, id: file.replace(/\.json$/, '') };
            });
        }
    } catch (err) {
        console.error('Error reading projects:', err);
    }

    return {
        props: { projects },
    };
}
