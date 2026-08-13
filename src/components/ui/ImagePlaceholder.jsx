import React from 'react';
import { Image, Camera, User, Play, Building } from 'lucide-react';
import clsx from 'clsx';

export const ImagePlaceholder = ({
  caption = "Photo — pending upload",
  aspectRatio = "aspect-video", // 'aspect-video' | 'aspect-square' | 'aspect-[4/3]' | 'aspect-[3/2]' | 'aspect-[3/4]'
  iconType = "image", // 'image' | 'camera' | 'user' | 'play' | 'building'
  className = "",
  badge,
  height,
  onClick,
}) => {
  const getIcon = () => {
    switch (iconType) {
      case 'camera':
        return <Camera className="w-8 h-8 text-brand-teal/60" />;
      case 'user':
        return <User className="w-8 h-8 text-brand-teal/60" />;
      case 'play':
        return <Play className="w-8 h-8 text-brand-teal/60 fill-brand-teal/20" />;
      case 'building':
        return <Building className="w-8 h-8 text-brand-teal/60" />;
      default:
        return <Image className="w-8 h-8 text-brand-teal/60" />;
    }
  };

  return (
    <div
      onClick={onClick}
      style={height ? { height } : undefined}
      className={clsx(
        'relative w-full rounded-2xl bg-brand-tint/70 border border-brand-teal/20 overflow-hidden flex flex-col items-center justify-center p-6 text-center transition-all duration-300 group',
        !height && aspectRatio,
        onClick && 'cursor-pointer hover:border-brand-teal/40 hover:shadow-soft',
        className
      )}
    >
      {/* Background Soft Organic Blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-tint/40 via-transparent to-brand-sage/10 pointer-events-none" />

      {badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-brand-teal-dark border border-brand-teal/20 shadow-xs">
          {badge}
        </span>
      )}

      <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-brand-tint transition-all">
        {getIcon()}
      </div>

      <span className="relative z-10 text-xs font-semibold text-warm-charcoal/80 tracking-wide">
        {caption}
      </span>
      <span className="relative z-10 text-[10px] text-warm-muted mt-0.5">
        Aura Foundation Media Library
      </span>
    </div>
  );
};

export default ImagePlaceholder;
