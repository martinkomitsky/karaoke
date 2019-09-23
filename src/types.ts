export interface IIndexedObject {
	[key: string]: any;
}

export type TObjectEntry = [string, any];

export type valueOf<T> = T[keyof T];

declare global {
	const isDev: boolean;
}

export type TTranscript = ITranscriptElement[];

export interface ITranscriptWord {
	timeEnd: number;
	timeStart: number;
	word: string;
}

export interface ITranscriptElement {
	phrase: string;
	timeStart: number;
	words: ITranscriptWord[];
}
