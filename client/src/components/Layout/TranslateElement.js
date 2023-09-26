import React, { useEffect } from 'react';

const TranslateElement = () => {
  useEffect(() => {
    // Load the Google Translate script and execute the loadGoogleTranslate function
    const script = document.createElement('script');
    script.src = 'http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
    script.async = true;
    script.onload = () => {
      // Delay the execution of loadGoogleTranslate to ensure the 'google' object is available
      setTimeout(loadGoogleTranslate, 1000); // Adjust the delay as needed
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const loadGoogleTranslate = () => {
    // Check if the 'google' object is available
    if (window.google && window.google.translate) {
      // Initialize the Google Translate widget in the "google_element" div
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_element'
      );
    } else {
      // Retry after a delay if 'google' object is not available yet
      setTimeout(loadGoogleTranslate, 100);
    }
  };

  return (
    <div id="google_element"></div>
  );
};

export default TranslateElement;