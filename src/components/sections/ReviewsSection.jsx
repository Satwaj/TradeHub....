import { Star, CheckCircle2, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { REVIEWS_DATA } from '../../constants/siteData';
import { useAutoCarousel } from '../../hooks/useAnimations';
import { getInitials } from '../../utils/helpers';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const { index, next, prev, goTo } = useAutoCarousel(REVIEWS_DATA.length, 6000);
  const review = REVIEWS_DATA[index];

  return (
    <section className="reviews-sec" id="reviews">
      <div className="container section-padding">
        <SectionHeader
          badge="Student Reviews"
          title="Real Reviews from"
          highlight="Real Students"
          subtitle="Discover what our students say about their learning journey and trading experience"
        />

        <div className="reviews-sec__carousel">
          <Card variant="glass" className="reviews-sec__card">
            <div className="reviews-sec__profile">
              <div className="reviews-sec__avatar">{getInitials(review.name)}</div>
              <div className="reviews-sec__info">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
                <span className="reviews-sec__city"><MapPin size={12} strokeWidth={2} /> {review.city}</span>
              </div>
              <div className="reviews-sec__stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>

            <blockquote className="reviews-sec__quote">"{review.text}"</blockquote>

            <div className="reviews-sec__highlights">
              {review.highlights.map((item) => (
                <span key={item} className="reviews-sec__highlight-tag">
                  <CheckCircle2 size={12} strokeWidth={2} /> {item}
                </span>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="reviews-sec__nav">
            <button className="reviews-sec__nav-btn" onClick={prev} aria-label="Previous review">
              <ChevronLeft size={18} />
            </button>
            <div className="reviews-sec__dots">
              {REVIEWS_DATA.map((_, i) => (
                <button
                  key={i}
                  className={`reviews-sec__dot ${i === index ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className="reviews-sec__nav-btn" onClick={next} aria-label="Next review">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
