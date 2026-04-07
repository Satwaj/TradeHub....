import { Telescope, Target, Trophy, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, STUDENT_RESULTS } from '../../constants/siteData';
import { useInView } from '../../hooks/useAnimations';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { cn } from '../../utils/helpers';
import './VisionMission.css';

const VisionMission = () => {
  const [visionRef, visionInView] = useInView();
  const [resultsRef, resultsInView] = useInView();

  return (
    <section className="vision-mission" id="vision-mission">
      <div className="container section-padding">
        <SectionHeader
          badge="Our Purpose"
          badgeVariant="primary"
          title="Vision &"
          highlight="Mission"
        />

        {/* Vision & Mission Cards */}
        <div ref={visionRef} className={cn('vm__cards stagger-children', visionInView && 'visible')}>
          <Card variant="glass" glow="primary" className="vm__card">
            <div className="vm__icon-wrap vm__icon-wrap--primary">
              <Telescope size={28} strokeWidth={1.5} />
            </div>
            <h3 className="vm__label">Our Vision</h3>
            <p className="vm__text">{SITE_CONFIG.vision}</p>
          </Card>

          <Card variant="glass" glow="accent" className="vm__card">
            <div className="vm__icon-wrap vm__icon-wrap--accent">
              <Target size={28} strokeWidth={1.5} />
            </div>
            <h3 className="vm__label">Our Mission</h3>
            <p className="vm__text">{SITE_CONFIG.mission}</p>
          </Card>
        </div>

        {/* Student Results */}
        <div ref={resultsRef} className={cn('vm__results fade-up', resultsInView && 'visible')}>
          <Card variant="glass" className="vm__results-card">
            <div className="vm__results-heading">
              <Trophy size={22} className="vm__trophy-icon" strokeWidth={1.5} />
              <h3 className="vm__results-title">
                What Our Students <span className="gradient-text">Achieve</span>
              </h3>
            </div>
            <div className="vm__results-grid">
              {STUDENT_RESULTS.map((result) => (
                <div key={result} className="vm__result-item">
                  <CheckCircle2 size={16} className="vm__result-icon" strokeWidth={2} />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
