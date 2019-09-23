import { observer } from 'mobx-react';
import * as React from 'react';
import ReactPlayer from 'react-player';
import { PlayerStore } from '../../Models';
import { timeToReadable } from '../../utils';
import * as s from './Player.css';
import * as T from './Player.types';

const PlayerComponent: React.FunctionComponent<T.IPlayerProps> = props => {
	const ref = React.createRef<ReactPlayer>();
	const { handleProgress: superHandleProgress, src } = props;

	const handlePlaying = () => {
		PlayerStore.playing = !PlayerStore.playing;
	};

	const handleDuration = (seconds: number) => {
		PlayerStore.duration = seconds;
	};

	const handleProgress = ({ playedSeconds }: T.IProgressState) => {
		PlayerStore.time = playedSeconds;
		if (superHandleProgress) {
			superHandleProgress(playedSeconds);
		}
	};

	const handleEnded = () => {
		const { current } = ref;
		PlayerStore.playing = false;
		PlayerStore.time = 0;

		if (current !== null) {
			current.seekTo(0, 'seconds');
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { current } = ref;
		const seekSeconds = +event.target.value;

		if (current !== null) {
			current.seekTo(seekSeconds, 'seconds');
		}
	};

	const timerValue = `${timeToReadable(PlayerStore.time)}/${timeToReadable(
		PlayerStore.duration
	)}`;

	const imageSrc = `/icons/${PlayerStore.playing ? 'pause' : 'play'}.png`;

	return (
		<div className={s.root}>
			<ReactPlayer
				className={s.playerElement}
				ref={ref}
				url={src}
				playing={PlayerStore.playing}
				onDuration={handleDuration}
				onProgress={handleProgress}
				onEnded={handleEnded}
				width={0}
				height={0}
				progressInterval={100}
			/>
			<div className={s.buttonContainer}>
				<button className={s.button} onClick={handlePlaying}>
					<img src={imageSrc} />
				</button>
			</div>
			<div className={s.rangeSliderContainer}>
				<input
					className={s.rangeSlider}
					step="0.05"
					type="range"
					min="0"
					max={Math.round(PlayerStore.duration)}
					value={Math.round(PlayerStore.time)}
					onChange={handleChange}
				/>
			</div>
			<div className={s.timeContainer}>
				<span className={s.time}>{timerValue}</span>
			</div>
		</div>
	);
};
export const Player = observer(PlayerComponent);
