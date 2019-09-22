import * as React from 'react';
import ReactPlayer from 'react-player';
import { timeToReadable } from '../../utils';
import * as s from './Player.css';
import * as T from './Player.types';

export const Player: React.FunctionComponent<T.IPlayerProps> = props => {
	const ref = React.createRef<ReactPlayer>();
	const { handleProgress: superHandleProgress } = props;
	const [time, setTime] = React.useState(0);
	const [playing, setPlaying] = React.useState(false);
	const [duration, setDuration] = React.useState(0);

	const handlePlaying = () => {
		setPlaying(!playing);
	};

	const handleDuration = (seconds: number) => {
		setDuration(seconds);
	};

	const handleProgress = ({ playedSeconds }: T.IProgressState) => {
		setTime(playedSeconds);
		superHandleProgress(playedSeconds);
	};

	const handleEnded = () => {
		const { current } = ref;
		setPlaying(false);
		setTime(0);

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

	const timerValue = `${timeToReadable(time)}/${timeToReadable(duration)}`;

	return (
		<div className={s.root}>
			<ReactPlayer
				className={s.playerElement}
				ref={ref}
				url="/audio.wav"
				playing={playing}
				onDuration={handleDuration}
				onProgress={handleProgress}
				onEnded={handleEnded}
				width={0}
				height={0}
				progressInterval={100}
			/>
			<div className={s.buttonContainer}>
				<button className={s.button} onClick={handlePlaying}>
					<img src={`/icons/${playing ? 'pause' : 'play'}.png`} />
				</button>
			</div>
			<div className={s.rangeSliderContainer}>
				<input
					className={s.rangeSlider}
					step="0.05"
					type="range"
					min="0"
					max={Math.round(duration)}
					value={Math.round(time)}
					onChange={handleChange}
				/>
			</div>
			<div className={s.timeContainer}>
				<span className={s.time}>{timerValue}</span>
			</div>
		</div>
	);
};
