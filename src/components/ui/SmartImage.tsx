import React, { useState } from 'react';
import { IMAGE_SLOTS, ImageSlotConfig, ImageSlotName, IllustrationKey } from '../../data/images';
import { ScrollTrigger } from '../../lib/gsap';
import { cn } from '../../lib/utils';
import { HouseIllustration } from '../illustrations/House';
import { GutterIllustration } from '../illustrations/Gutter';
import { RidgelineIllustration } from '../illustrations/Ridgeline';
import { TopoIllustration } from '../illustrations/Topo';
import { WaterDropsIllustration } from '../illustrations/WaterDrops';
import { LadderIllustration } from '../illustrations/Ladder';

interface SmartImageProps {
  slot: ImageSlotName;
  alt?: string;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  aspectRatio?: string;
}

const ILLUSTRATION_MAP: Record<IllustrationKey, React.FC<{ className?: string }>> = {
  house: HouseIllustration,
  gutter: GutterIllustration,
  ridgeline: RidgelineIllustration,
  topo: TopoIllustration,
  water: WaterDropsIllustration,
  ladder: LadderIllustration,
};

export const SmartImage: React.FC<SmartImageProps> = ({
  slot,
  alt,
  className,
  imgClassName,
  objectPosition,
  priority = false,
  aspectRatio,
}) => {
  const config: ImageSlotConfig = IMAGE_SLOTS[slot];
  const [stage, setStage] = useState<'local' | 'unsplash' | 'illustration'>('local');
  const [loaded, setLoaded] = useState(false);

  const src =
    stage === 'local'
      ? config.local
      : stage === 'unsplash' && config.unsplash
        ? config.unsplash
        : '';

  const FallbackIllustration = ILLUSTRATION_MAP[config.illustration];
  const finalAlt = alt || config.alt;
  const finalPosition = objectPosition || config.defaultObjectPosition || '50% 50%';

  const handleError = () => {
    if (stage === 'local' && config.unsplash) {
      setStage('unsplash');
    } else {
      setStage('illustration');
      setLoaded(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
  };

  return (
    <div
      className={cn('relative overflow-hidden bg-[#14284B]', className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!loaded && stage !== 'illustration' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 skeleton-shimmer z-0"
        />
      )}

      {stage === 'illustration' || !src ? (
        <div className="w-full h-full">
          <FallbackIllustration className="w-full h-full object-cover" />
        </div>
      ) : (
        <img
          src={src}
          alt={finalAlt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          onLoad={handleLoad}
          onError={handleError}
          style={{ objectPosition: finalPosition }}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName
          )}
        />
      )}
    </div>
  );
};
