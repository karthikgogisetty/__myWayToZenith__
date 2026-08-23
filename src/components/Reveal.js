import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * A restrained entrance — a short lift and fade, nothing more.
 *
 * Under `prefers-reduced-motion` this renders a plain element at its final
 * state. Reduced motion also disables smooth scrolling, so an anchor jump can
 * skip a section entirely; a `whileInView` element that never intersects would
 * otherwise stay invisible for good.
 */
export default function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  y = 10,
  ...rest
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
