export interface IPlayerProps {
	handleProgress: (seconds: number) => void;
	playing: boolean;
}

export interface IProgressState {
	played: number;
	playedSeconds: number;
	loaded: number;
	loadedSeconds: number;
}
