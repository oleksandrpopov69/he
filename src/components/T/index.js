/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

type Props = Text.propTypes & {
  text: string
};

const T = ({text, ...props}: Props) => {
  const i18n = useTranslation();
  return <Text {...props}>{i18n.t(text)}</Text>;
};

export default T;
