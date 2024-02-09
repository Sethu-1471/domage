import { SHORT_CODE } from './constants';

export type SHORT_CODE_TYPES = keyof typeof SHORT_CODE;

export interface IReturnType {
	isDone: boolean;
	code: SHORT_CODE_TYPES;
	message: string;
	ele?: HTMLElement | Element | null;
}
