"use client"; // Mark as a client component

import React from "react";
import styles from './VideoBackground.module.css'; // Ensure this CSS file exists

const VideoBackground: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        src="/videos/background.mp4" // Ensure the video path is correct
        autoPlay
        muted
        loop
      />
      
    </div>
  );
};

export default VideoBackground;
