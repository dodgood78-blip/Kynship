import styles from './ReviewsSection.module.css';
import reviews from '../data/reviews.json';

export default function ReviewsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">آراء عملائنا</span>
          <h2 className="section-title">ماذا قالوا عنا</h2>
          <div className="gold-divider" />
        </div>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(review.rating)}
              </div>
              <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
              <div className={styles.client}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.location}>{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
