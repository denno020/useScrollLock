import React, { useLayoutEffect } from 'react';

export const useScrollLock = () => {
  const lockScroll = React.useCallback(
    () => {
      document.body.style.overflow = 'hidden';
      document.body.dataset.scrollLock = 'true';
      document.body.style.paddingRight = 'var(--scrollbar-compensation)';
    }, [])

  const unlockScroll = React.useCallback(
    () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      delete document.body.dataset.scrollLock;
    }, []);

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty('--scrollbar-compensation', `${scrollBarCompensation}px`);
  }, [])

  return {
    lockScroll,
    unlockScroll
  };
}
