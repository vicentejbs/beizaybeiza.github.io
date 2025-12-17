import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for scroll animations
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animations = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      hidden: 'opacity-0',
      visible: 'opacity-100',
    },
    'slide-left': {
      hidden: 'opacity-0 -translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'slide-right': {
      hidden: 'opacity-0 translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'scale': {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
    'blur': {
      hidden: 'opacity-0 blur-sm',
      visible: 'opacity-100 blur-0',
    },
  };

  const animConfig = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? animConfig.visible : animConfig.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// Staggered children animation
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale';
}

export const StaggeredContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  animation = 'fade-up',
}: StaggeredContainerProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <AnimatedSection
              key={index}
              animation={animation}
              delay={isVisible ? index * staggerDelay : 0}
              duration={0.5}
            >
              {child}
            </AnimatedSection>
          ))
        : children}
    </div>
  );
};
