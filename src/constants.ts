import { SHORT_CODE_TYPES } from './interface';

export const SHORT_CODE = {
	DOMAGE_INIT: 'DOMAGE_INIT',
	COPIED: 'COPIED',
	CLONED: 'CLONED',
	ADDED: 'ADDED',
	REMOVED: 'REMOVED',
	ADDED_TO_POSITION: 'ADDED_TO_POSITION',
	PARENT_NOT_FOUND: 'PARENT_NOT_FOUND',
	SOURCE_NOT_FOUND: 'SOURCE_NOT_FOUND',
	TARGET_NOT_FOUND: 'TARGET_NOT_FOUND',
} as const;

export const MESSAGES: { [key in SHORT_CODE_TYPES]: string } = {
	DOMAGE_INIT: 'Domage Init Success!',
	COPIED: 'Element Copied Success!',
	CLONED: 'Element Cloned Success!',
	ADDED: 'Element Added Success!',
	REMOVED: 'Element Removed Success!',
	ADDED_TO_POSITION: 'Added to Position Mentioned!',
	PARENT_NOT_FOUND: 'Parent Element not Found!',
	SOURCE_NOT_FOUND: 'Source Element not Found!',
	TARGET_NOT_FOUND: 'Target Element not Found!',
} as const;
