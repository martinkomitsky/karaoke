export interface IAppProps {
}

export interface IAppState {
	time: number;
	playing: boolean;
}

export interface IAppContext {
	context?: IAppState;
}
