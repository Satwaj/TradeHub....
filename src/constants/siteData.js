// Site-wide content & configuration constants
export const SITE_CONFIG = {
  name: 'TradeHub',
  tagline: "Nashik's No.1 Trading Institute",
  subtitle: 'Master the Art of Professional Trading',
  description:
    "Welcome to Nashik's Leading Offline & Online Trading Institute, where beginners become confident traders and traders become professionals.",
  mission: 'To provide real trading knowledge that helps students become independent traders.',
  vision:
    "To build India's most disciplined and knowledgeable traders through practical education and professional guidance.",
  contact: {
    location: 'Nashik, Maharashtra, India',
    email: 'support@tradehub.com',
    phone: '+91 98765 43210',
  },
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_STATS = [
  { value: '2.5K+', label: 'Graduates' },
  { value: '92%', label: 'Success Rate' },
  { value: '5+', label: 'Years Experience' },
  { value: '30K+', label: 'Community Members' },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'BookOpen',
    title: 'Best Trading Education in Nashik',
    description: 'We provide deep and practical knowledge of the stock market with step-by-step guidance.',
  },
  {
    icon: 'MonitorPlay',
    title: 'Offline + Online Classes',
    description: 'Learn from anywhere with live interactive sessions or join our offline classroom training in Nashik.',
  },
  {
    icon: 'TrendingUp',
    title: 'Live Market Training',
    description: 'Trade with us in real-time live market sessions and understand how professional traders think.',
  },
  {
    icon: 'Target',
    title: 'Beginner to Advanced Training',
    description: 'Our courses are designed for complete beginners, part-time traders, full-time traders, and investors.',
  },
  {
    icon: 'BarChart2',
    title: 'Practical Learning Approach',
    description: 'We focus on real charts, real strategies, real risk management, and real market psychology.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Lifetime Support',
    description: 'Students receive continuous support and guidance even after course completion.',
  },
];

export const WHAT_YOU_LEARN = {
  basics: {
    title: 'Stock Market Basics',
    items: ['How stock market works', 'Trading accounts setup', 'Order types', 'Market structure'],
  },
  technical: {
    title: 'Technical Analysis',
    items: ['Candlestick Patterns', 'Support & Resistance', 'Trend Analysis', 'Chart Patterns'],
  },
};

export const SPECIAL_FEATURES = [
  'Live Trading Practice',
  'Daily Market Analysis',
  'Strategy-Based Trading',
  'Recorded Sessions',
  'Doubt Clearing Sessions',
  'Personal Guidance',
  'Professional Environment',
  'Real Trader Mentorship',
];

export const WHO_CAN_JOIN = [
  { icon: 'GraduationCap', label: 'Students' },
  { icon: 'Briefcase',     label: 'Job Holders' },
  { icon: 'Building2',     label: 'Business Owners' },
  { icon: 'Home',          label: 'Housewives' },
  { icon: 'PiggyBank',     label: 'Investors' },
  { icon: 'Sprout',        label: 'Beginners' },
];

export const STUDENT_RESULTS = [
  'How to trade safely',
  'How to avoid big losses',
  'How to grow capital',
  'How to trade professionally',
];

export const COURSE_DATA = {
  live: {
    title: 'Live Online Masterclass',
    desc: 'Learn from anywhere with real-time interaction',
    price: '₹20,000',
    badge: 'Next: 15th Feb 2026',
    duration: '4 weeks',
    students: '50+ students per batch',
  },
  liveRecorded: {
    title: 'Live + Recorded Masterclass',
    desc: 'Attend live + lifetime access to recordings',
    price: '₹25,000',
    badge: 'Next: 20th Jan 2026',
    duration: '4 weeks',
    students: '70+ students per batch',
  },
  offline: {
    title: 'Offline Masterclass',
    desc: 'In-person learning with classroom experience',
    price: '₹25,000',
    badge: 'Next: Feb 2026',
    duration: '4 weeks',
    students: '30 students per batch',
  },
};

export const COURSE_TABS = [
  { key: 'live',         label: 'Live Course' },
  { key: 'liveRecorded', label: 'Live + Recorded' },
  { key: 'offline',      label: 'Offline' },
];

export const INCLUDED_FEATURES = [
  'Live interactive sessions with Q&A',
  'Screen sharing and real-time charts',
  'Recorded sessions for replay',
  'Digital resources and PDFs',
  'Online community access',
  '1-on-1 doubt clearing sessions',
];

export const COMPARISON_DATA = [
  {
    type: 'live',
    title: 'Live Masterclass',
    features: ['Learn from anywhere', 'Fixed live schedule', 'Real-time interaction'],
    price: '₹46,000',
  },
  {
    type: 'hybrid',
    title: 'Live + Recorded',
    features: ['Live + lifetime recordings', 'Flexible learning', 'Revision anytime'],
    price: '₹52,000',
    popular: true,
  },
  {
    type: 'offline',
    title: 'Offline Masterclass',
    features: ['Face-to-face learning', 'Hands-on practice', 'Networking opportunities'],
    price: '₹64,000',
  },
];

export const SYLLABUS_DATA = [
  {
    week: 'Week 1',
    days: 'Days 1-7',
    title: 'Foundation & Market Basics',
    color: 'blue',
    syllabus: [
      'Market introduction & structure',
      'Types of markets (Equity, F&O)',
      'Candlestick psychology',
      'Support & Resistance',
      'Trend & range identification',
      'Risk management basics',
      'Live chart practice + Q&A',
    ],
  },
  {
    week: 'Week 2',
    days: 'Days 8-14',
    title: 'Advanced Trading & Market Structure',
    color: 'purple',
    syllabus: [
      'Market structure (BOS & CHoCH)',
      'Liquidity & stop hunts',
      'Order blocks',
      'Fair Value Gaps (FVG)',
      'Multi-timeframe analysis',
      'Entry & exit models',
      'Live trading review',
    ],
  },
  {
    week: 'Week 3',
    days: 'Days 15-21',
    title: 'Professional Trading & Funding',
    color: 'green',
    syllabus: [
      'Professional trading plans',
      'Advanced risk management',
      'Trading psychology',
      'Journaling & metrics',
      'Prop firm rules',
      'Funded account strategy',
      'Performance review',
    ],
  },
  {
    week: 'Week 4',
    days: 'Days 22-28',
    title: 'Advanced Psychology & Live Capital Deployment',
    color: 'orange',
    syllabus: [
      'Advanced trader psychology',
      'News & volatility trading',
      'Scaling strategies',
      'Live capital deployment',
      'Career roadmap',
      'Full live trading',
      'Final assessment & certification',
    ],
  },
];

export const REVIEWS_DATA = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer → Full-time Trader',
    city: 'Mumbai',
    rating: 5,
    text: 'Before joining, I was randomly entering trades without a plan. The live sessions and community discussions completely changed my mindset. I now focus more on risk and consistency rather than quick profits.',
    highlights: ['Structured learning', 'Strong community', 'Practical guidance'],
  },
  {
    name: 'Ankit Verma',
    role: 'Final Year Engineering Student',
    city: 'Pune',
    rating: 5,
    text: 'The recorded + live format worked really well for me because of college. I revisited the recordings multiple times and slowly understood market structure. This course gave me clarity.',
    highlights: ['Flexible learning', 'Clear explanations', 'Beginner friendly'],
  },
  {
    name: 'Neha Patel',
    role: 'Chartered Accountant',
    city: 'Ahmedabad',
    rating: 5,
    text: 'As someone from a finance background, I appreciated the discipline and risk management approach. This is not a tips-based course. It focuses on thinking like a trader.',
    highlights: ['Risk management', 'Professional mindset', 'Mentor support'],
  },
  {
    name: 'Saurabh Mishra',
    role: 'Small Business Owner',
    city: 'Indore',
    rating: 5,
    text: 'Offline sessions helped me a lot. Face-to-face interaction and practical examples made concepts easier to understand. The mentors were very approachable.',
    highlights: ['Offline experience', 'Hands-on learning', 'Good mentors'],
  },
];
