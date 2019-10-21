/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';

import { ToggleSwitch } from '.';

storiesOf('Form Components', module)
  .addDecorator(withKnobs)
  .add('ToggleSwitch', () => (
    <ToggleSwitch
      key='switch'
      disabled={boolean('Disabled', false)}
      isChecked={boolean('Checked', true)}
      trueColor={color('Active Color', '#4A90E2')}
      falseColor={color('Inactive Color', '#D9534F')}
    />
  ));
