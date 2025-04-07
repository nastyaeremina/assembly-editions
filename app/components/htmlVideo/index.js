'use client';
// New Video component to handle video rendering
// give 
export const Video = ({ src }) => (
  <video controls>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);