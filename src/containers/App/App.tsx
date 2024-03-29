import classnames from 'classnames';
import * as React from 'react';
import { Card } from '../../components/Card';
import { Dialog } from '../../components/Dialog';
import { Player } from '../../components/Player';
import texts from '../../transcript.json';
import { ITranscriptWord, TTranscript } from '../../types';
import { timeToReadable } from '../../utils';
import Layout from '../Layout';
import * as s from './App.css';
import * as T from './App.types';

class App extends React.Component<{}, T.IAppState> {
	public state: T.IAppState = {
		time: 0,
	};

	public renderDialogs = () => {
		return (texts as TTranscript).map((sentence, index: number) => {
			return (
				<Dialog date={timeToReadable(sentence.timeStart)} key={index}>
					<div className={s.sentence}>
						{this.renderWords(sentence.words)}
					</div>
				</Dialog>
			);
		});
	};

	public renderWords = (words: ITranscriptWord[]) => {
		const { time } = this.state;

		return words.map((word, idx) => {
			const { timeStart, timeEnd } = word;
			const showCase = time > timeStart && time < timeEnd;
			return (
				<span
					className={classnames(s.word, { [s.wordActive]: showCase })}
					key={idx}
				>
					{word.word}
				</span>
			);
		});
	};

	public handleProgress = (time: number) => {
		this.setState({
			time,
		});
	};

	public render() {
		return (
			<div className={s.app}>
				<Layout>
					<div className={s.container}>
						<Card
							title="Audio.wav"
							subtitle="21 мар 18:03:41"
							separator
						>
							<React.Fragment>
								{this.renderDialogs()}
							</React.Fragment>
						</Card>
						<Card small>
							<Player
								src="/audio.wav"
								handleProgress={this.handleProgress}
							/>
						</Card>
					</div>
				</Layout>
			</div>
		);
	}
}
export default App;
