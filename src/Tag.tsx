import React from 'react';

type TagProps = {
  label: string;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
};

export const Tag = ({ label, color = 'primary', size = 'md' }: TagProps) => {
  let colorClass = '';
  let sizeClass = '';

  // Simple color switch
  switch (color) {
    case 'success':
      colorClass = 'bg-success';
      break;
    case 'warning':
      colorClass = 'bg-warning';
      break;
    case 'error':
      colorClass = 'bg-error';
      break;
    case 'info':
      colorClass = 'bg-info';
      break;
    default:
      colorClass = 'bg-primary';
  }

  // Simple size switch
  switch (size) {
    case 'sm':
      sizeClass = 'text-xs px-2 py-0.5';
      break;
    case 'lg':
      sizeClass = 'text-base px-4 py-1.5';
      break;
    default:
      sizeClass = 'text-sm px-3 py-1';
  }

  return (
    <span
      className={`inline-block rounded-full text-white font-medium ${colorClass} ${sizeClass}`}
    >
      {label}
    </span>
  );
};
