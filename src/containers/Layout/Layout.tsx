import * as React from 'react';
import * as s from './Layout.css';
import * as T from './Layout.types';

const Layout: React.FunctionComponent<T.ILayoutProps> = props => {
	const { header, children, footer } = props;
	const HeaderElement = (
		<header>
			<div className={s.header}>{header}</div>
		</header>
	);
	const FooterElement = (
		<footer>
			<div className={s.footer}>{footer}</div>
		</footer>
	);

	return (
		<main className={s.root}>
			{header && HeaderElement}

			<section className={s.contentWrapper}>
				<div className={s.content}>{children}</div>
			</section>

			{footer && FooterElement}
		</main>
	);
};

export default Layout;
