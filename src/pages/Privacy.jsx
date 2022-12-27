import React, { useEffect } from 'react';
import AlternativeFooter from './components/others/AlternativeFooter';
import AlternativeHeader from './components/others/AlternativeHeader';
import PrivacyElement from './components/privacy/PrivacyElement';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AlternativeHeader />
      <PrivacyElement />
      <AlternativeFooter />
    </>
  );
}

export default Privacy;
