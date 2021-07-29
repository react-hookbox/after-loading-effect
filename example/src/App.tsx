import { useState } from 'react';
import useAfterLoadingEffect from '@react-hookbox/after-loading-effect';

const AppExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormPage, setIsFormPage] = useState(true);

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 2000);
  };

  useAfterLoadingEffect(isLoading, () => setIsFormPage(false));

  return (
    <div>
      <h1>@react-hookbox/after-loading-effect example</h1>

      <div hidden={!isFormPage}>
        <b>{isLoading && 'Loading...'}</b>

        <button
          type="button"
          disabled={isLoading}
          onClick={() => handleSubmit()}
        >
          Submit Form
        </button>
      </div>

      <div hidden={isFormPage}>
        <button type="submit" onClick={() => setIsFormPage(true)}>
          &lt; back to form
        </button>

        <h2>The form is submitted successfully. 🎉🎉🎉</h2>
      </div>
    </div>
  );
};

export default AppExample;
