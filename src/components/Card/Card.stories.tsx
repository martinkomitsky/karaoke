import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Card } from './Card';

const stories = storiesOf('Karaoke|Card', module).addParameters({
	readme: {
		sidebar: require('./README.md'),
	},
});

stories.add('with a child', () => (
	<React.Fragment>
		<Card>
			<React.Fragment>Text text text</React.Fragment>
		</Card>
	</React.Fragment>
));

stories.add('with title & subtitle', () => (
	<React.Fragment>
		<Card title="Sad girlfriend" subtitle="5 seconds ago">
			<React.Fragment>Miss you so much hmmmmmmm :(</React.Fragment>
		</Card>
	</React.Fragment>
));

stories.add('small with separator', () => (
	<React.Fragment>
		<Card title="Kanye West" separator small>
			<React.Fragment>
				Kanye Omari West (/ˈkɑːnjeɪ/; born June 8, 1977) is an American
				rapper, singer, songwriter, record producer, entrepreneur, and
				fashion designer. His music has spanned a broad range of styles,
				incorporating an eclectic range of influences including soul,
				baroque pop, electro, indie rock, synth-pop, industrial, and
				gospel.
			</React.Fragment>
		</Card>
	</React.Fragment>
));
