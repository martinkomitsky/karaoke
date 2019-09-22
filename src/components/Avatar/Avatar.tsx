import * as React from 'react';
import * as s from './Avatar.css';
import * as T from './Avatar.types';

export const Avatar: React.FunctionComponent<T.IAvatarProps> = props => {
	const { children } = props;

	return <div className={s.avatar}>{children}</div>;
};
