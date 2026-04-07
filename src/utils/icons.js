/**
 * Icon resolver — maps icon name strings to Lucide React components.
 * This keeps icon imports centralised and lets data stay serialisable.
 */
import {
  BookOpen,
  MonitorPlay,
  TrendingUp,
  Target,
  BarChart2,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Building2,
  Home,
  PiggyBank,
  Sprout,
  Telescope,
  Trophy,
  Star,
  Clock,
  Users2,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP = {
  BookOpen,
  MonitorPlay,
  TrendingUp,
  Target,
  BarChart2,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Building2,
  Home,
  PiggyBank,
  Sprout,
  Telescope,
  Trophy,
  Star,
  Clock,
  Users2,
  CheckCircle2,
};

/**
 * Resolve an icon name string to its Lucide component.
 * Returns null if not found (fail silently).
 */
export function getIcon(name) {
  return ICON_MAP[name] ?? null;
}
