import { renderHook } from '@testing-library/react-hooks';
import { useAfterLoadingEffect } from './index';

describe('@react-hookbox/after-loading-effect', () => {
  it('should not call callback at the start', () => {
    const callback = jest.fn();
    renderHook(({ isLoading }) => useAfterLoadingEffect(isLoading, callback), {
      initialProps: { isLoading: false },
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should call it only after isLoading is made false from true', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(({ isLoading }) => useAfterLoadingEffect(isLoading, callback), {
      initialProps: { isLoading: true },
    });

    rerender({ isLoading: false });
    expect(callback).toHaveBeenCalled();
  });

  it('should call the return before next effect', () => {
    const returnCallback = jest.fn();
    const callback = jest.fn().mockReturnValue(returnCallback);
    const { rerender } = renderHook(({ isLoading }) => useAfterLoadingEffect(isLoading, callback), {
      initialProps: { isLoading: true },
    });

    rerender({ isLoading: false });
    rerender({ isLoading: true });
    rerender({ isLoading: false });

    expect(returnCallback).toHaveBeenCalled();
  });

  it('should use the hook provided', () => {
    const fakeHook = jest.fn();
    const callback = jest.fn();
    const { rerender } = renderHook(({ isLoading }) => useAfterLoadingEffect(isLoading, callback, fakeHook), {
      initialProps: { isLoading: true },
    });
    expect(fakeHook).toHaveBeenCalled();

    rerender({ isLoading: false });
    // shouldn't call callback as fakeHook doesn't do anything.
    expect(callback).not.toHaveBeenCalled();
  });
});
