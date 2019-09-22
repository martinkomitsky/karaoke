import * as React from 'react';
import * as s from './Dialog.css';
import * as T from './Dialog.types';
import {Avatar} from '../Avatar';

export const Dialog: React.FunctionComponent<T.IDialogProps> = props => {
	const { children, date, text } = props;

	return (
		<div className={s.dialog}>
			<div className={s.avatar}>
				<Avatar>
					<img src="/icons/avatar.png" alt="avatar" />
				</Avatar>
			</div>
			<div className={s.content}>
				<span className={s.date}>
					{date}
				</span>
				<span className={s.text}>
					{text}
					{children}
				</span>
			</div>
		</div>
	);
};
