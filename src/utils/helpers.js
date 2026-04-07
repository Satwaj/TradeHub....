/**
 * Utility helper functions
 */

/**
 * Generate initials from a full name
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

/**
 * Format a number with suffix (e.g., 2500 → "2.5K+")
 */
export function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  }
  return num.toString();
}

/**
 * Classname utility - join class names conditionally
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smooth scroll to a section by id
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
