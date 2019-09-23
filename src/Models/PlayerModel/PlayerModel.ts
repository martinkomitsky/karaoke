import { decorate, observable } from 'mobx';

interface IPlayerModel {
	duration: number;
	playing: boolean;
	time: number;
}

class Player {
	constructor({ duration, playing, time }: IPlayerModel) {
		this.duration = duration;
		this.playing = playing;
		this.time = time;
	}
	public duration = 0;
	public playing = false;
	public time = 0;
}

decorate(Player, {
	duration: observable,
	playing: observable,
	time: observable,
});

export const PlayerModel = Player;
