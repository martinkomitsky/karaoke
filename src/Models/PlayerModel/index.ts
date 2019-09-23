import { PlayerModel } from './PlayerModel';

export const PlayerStore = new PlayerModel({
	duration: 0,
	playing: false,
	time: 0,
});

export * from './PlayerModel';
