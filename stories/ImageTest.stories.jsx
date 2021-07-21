import React from 'react';

import ImageTest from '../components/ImageTest';

export default {
  title: 'Image/ImageTest',
  component: ImageTest,
};

const Template = (args) => <ImageTest {...args} />;

export const KitchenSink = Template.bind({});
KitchenSink.args = {};