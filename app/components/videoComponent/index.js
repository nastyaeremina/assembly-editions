import React from 'react';

export default function VideoComponent({ src, controls = true, poster = '' }) {
  return <video src={src} controls={controls} poster={poster} playsInline />;
}
