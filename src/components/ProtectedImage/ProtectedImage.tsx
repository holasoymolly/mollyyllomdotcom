import React from 'react';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({
  wrapperClassName,
  className,
  style,
  ...props
}) => {
  return (
    <div className={`relative ${wrapperClassName ?? ''}`} style={{ display: 'contents' }}>
      <img
        {...props}
        className={className}
        style={style}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      {/* Transparent overlay — blocks drag ghost and secondary right-click targets */}
      <div
        aria-hidden="true"
        className="absolute inset-0 select-none"
        style={{ pointerEvents: 'none' }}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
    </div>
  );
};
