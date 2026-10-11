import Script from 'next/script';

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId || process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          try {
            var params = new URLSearchParams(window.location.search);
            if (params.has('notrack')) localStorage.setItem('ga-optout', '1');
            if (params.has('track')) localStorage.removeItem('ga-optout');
            if (localStorage.getItem('ga-optout') === '1') {
              window['ga-disable-${gaId}'] = true;
            }
          } catch (e) {}

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
