import { EffectCallback, useEffect, useRef } from 'react';

export const useAfterLoadingEffect = (isLoading: boolean, callback: EffectCallback, useEffectHook = useEffect) => {
  const wasLoadingRef = useRef(isLoading);

  useEffectHook(() => {
    if (wasLoadingRef.current && !isLoading) {
      wasLoadingRef.current = isLoading;
      return callback();
    }

    wasLoadingRef.current = isLoading;
  }, [isLoading, callback]);
};

export default useAfterLoadingEffect;
