import classnames from 'classnames';
import * as React from 'react';
import * as s from './Card.css';
import * as T from './Card.types';

export const Card: React.FunctionComponent<T.ICardProps> = props => {
	const { children, title, subtitle, separator, small } = props;

	return (
		<div className={classnames(s.card, { [s.cardSmall]: small })}>
			{title && <p className={s.cardTitle}>{title}</p>}
			{subtitle && <p className={s.cardSubtitle}>{subtitle}</p>}
			{separator && <hr className={s.separator} />}
			{children}
		</div>
	);
};
