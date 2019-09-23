export interface IPlayerProps {
	handleProgress: (seconds: number) => void;
	src: string;
}

export interface IProgressState {
	played: number;
	playedSeconds: number;
	loaded: number;
	loadedSeconds: number;
}
