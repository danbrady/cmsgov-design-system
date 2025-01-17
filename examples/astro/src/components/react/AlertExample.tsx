import { Alert } from '@cmsgov/design-system';
import React from 'react';

function AlertExample() {
  return (
    <>
      <h2>Alert Example</h2>
      <Alert heading="Status heading">
        <p className="ds-c-alert__text">This is a React Alert component.</p>
      </Alert>
    </>
  );
}

export default AlertExample;
