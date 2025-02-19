import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as AvocadoIcon } from './images/avocado.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AvocadoIcon} viewBox="0 0 150 58" {...props} />;
}
