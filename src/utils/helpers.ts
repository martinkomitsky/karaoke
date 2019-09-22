export const noop = (data: any) => data;

export const makeDiv = (params: { id: string }) => {
	const div = document.createElement('div');
	div.id = params.id;
	return div;
};

export const appendElementToBody = (element: HTMLElement) => {
	const body = document.getElementsByTagName('body')[0];
	body.appendChild(element);
};

export const timeToReadable = (seconds: number) => {
	const date = new Date(seconds * 1000);
	return `${date
		.getUTCMinutes()
		.toString()
		.padStart(2, '0')}:${date
		.getSeconds()
		.toString()
		.padStart(2, '0')}`;
};
