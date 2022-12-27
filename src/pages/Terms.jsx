import React, { useEffect } from 'react';
import AlternativeFooter from './components/others/AlternativeFooter';
import AlternativeHeader from './components/others/AlternativeHeader';
import TermsElement from './components/terms/TermsElement';

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AlternativeHeader />
      <TermsElement />
      <AlternativeFooter />
    </>
  );
}

export default Terms;
