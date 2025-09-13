'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { MessageWrapper, Text } from './styles';

export default function ToastMessage({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExitingMessage, setIsExitingMessage] = useState(false);

  const startExitAnimation = useCallback(() => {
    setIsExitingMessage(true);
  }, []);

  const removeFromDOM = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    // Start enter animation
    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10); // Small delay to ensure smooth enter animation

    // Start exit animation after a delay
    const exitTimer = setTimeout(() => {
      startExitAnimation();
    }, 3000); // Start exit animation after 3 seconds

    // Remove from DOM after exit animation completes
    const removeTimer = setTimeout(() => {
      removeFromDOM();
    }, 3300); // Remove after 3.3 seconds (3s + 0.3s animation)

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [startExitAnimation, removeFromDOM]);

  return (
    <MessageWrapper isVisible={isVisible} isExitingMessage={isExitingMessage}>
      <Text>
        <span>{message}</span>
      </Text>
    </MessageWrapper>
  );
}
