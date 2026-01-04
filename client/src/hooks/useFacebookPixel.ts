export const useFacebookPixel = () => {
  const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, eventData);
    }
  };

  const trackCTAClick = (buttonName: string) => {
    trackEvent('Lead', {
      content_name: buttonName,
      content_type: 'product',
    });
  };

  return { trackEvent, trackCTAClick };
};
