'use client';

import { useEffect, useState } from 'react';
import { ENABLE_ANALYTICS, ENABLE_CONSENT } from '@/lib/config';
import { ConsentBanner } from '@/modules/consent/ConsentBanner';
import { AnalyticsProvider } from '@/modules/analytics/AnalyticsProvider';

export function ModulesMount() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    if (!ENABLE_CONSENT && ENABLE_ANALYTICS) {
      setConsentGranted(true);
    }
  }, []);

  return (
    <>
      {ENABLE_CONSENT && (
        <ConsentBanner onAccept={() => setConsentGranted(true)} />
      )}
      {consentGranted && ENABLE_ANALYTICS && <AnalyticsProvider />}
    </>
  );
}


