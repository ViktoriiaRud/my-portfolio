import React from 'react';
import loadable from '@loadable/component';

import { iconNames } from './icon.constant';

export type IconNameType = (typeof iconNames)[number];

export type IconType = {
  name: IconNameType;
  className?: string;
  position?: 'left' | 'right';
};

const Icon = ({ name, className, ...delegated }: IconType) => {
  if (name === 'none') return null;

  const SvgComponent = loadable(() => import(`./icons/${name}`));

  return <SvgComponent {...{ ...delegated, className }} data-testid="icon" />;
};

export default React.memo(Icon);
