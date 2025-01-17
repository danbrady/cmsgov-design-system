import { ChoiceList } from '@cmsgov/design-system';
import React from 'react';

function ChoiceListExample() {
  return (
    <>
      <h2>ChoiceList Example</h2>
      <ChoiceList
        choices={[
          { label: 'Choice 1', value: 'A', hint: 'Choice hint text' },
          {
            label: 'Choice 2',
            value: 'B',
          },
        ]}
        errorMessage="Example error message"
        label="Radio example"
        name="radio_choices"
        type="radio"
      />
    </>
  );
}

export default ChoiceListExample;
