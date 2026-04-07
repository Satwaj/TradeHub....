import { useState } from 'react';
import { CheckCircle2, Plus, Minus } from 'lucide-react';
import { SYLLABUS_DATA } from '../../constants/siteData';
import { useInView } from '../../hooks/useAnimations';
import SectionHeader from '../ui/SectionHeader';
import { cn } from '../../utils/helpers';
import './CurriculumSection.css';

const CurriculumSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isInView] = useInView();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const colorMap = {
    blue: 'var(--color-primary-light)',
    purple: '#a78bfa',
    green: 'var(--color-success-light)',
    orange: 'var(--color-warning)',
  };

  return (
    <section className="curriculum" id="curriculum">
      <div className="container section-padding">
        <SectionHeader
          badge="Complete Curriculum"
          badgeVariant="warning"
          title="4-Week Comprehensive"
          highlight="Program"
          subtitle="Structured journey from market basics to professional trading"
        />

        <div ref={ref} className={cn('curriculum__list stagger-children', isInView && 'visible')}>
          {SYLLABUS_DATA.map((item, index) => (
            <div
              key={index}
              className={cn('curriculum__card', openIndex === index && 'open')}
              onClick={() => toggle(index)}
              style={{ '--accent': colorMap[item.color] }}
            >
              <div className="curriculum__card-header">
                <div className="curriculum__meta">
                  <span className="curriculum__week">{item.week}</span>
                  <span className="curriculum__days">{item.days}</span>
                </div>
                <h3 className="curriculum__title">{item.title}</h3>
                <span className="curriculum__arrow">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>

              <div className={cn('curriculum__syllabus', openIndex === index && 'open')}>
                <ul>
                  {item.syllabus.map((topic, i) => (
                    <li key={i}>
                      <CheckCircle2 size={13} className="curriculum__bullet" strokeWidth={2} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
