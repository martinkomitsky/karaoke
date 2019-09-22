export { IAppContext, IAppState } from './containers/App';

export interface IImageItem {
	id: string;
	title: string;
	description: string;
	img: string;
	editable: boolean;
	created: number;
}

export interface IOptionItem {
	label: string;
	value: number;
	undeletable?: boolean;
}

export interface IListItem {
	name: string;
	id: number;
}

export interface IFileProps {
	height: number;
	src: string;
	width: number;
}

export interface IIndexedObject {
	[key: string]: any;
}

export type TAsyncFileProps = Promise<IFileProps>;

export type TObjectEntry = [string, any];

export type TAnyPromise = Promise<any>;

export type TFetchCallback = () => TAnyPromise;

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
