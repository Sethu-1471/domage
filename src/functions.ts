import { MESSAGES, SHORT_CODE } from './constants';
import { IReturnType } from './interface';

// Check if the library supports
export function isDomageInit(): boolean {
	console.log(MESSAGES.DOMAGE_INIT);
	return true;
}

// Create an element
export function createElement(
	tagName: keyof HTMLElementTagNameMap
): HTMLElement {
	return document.createElement(tagName);
}

// Get an element
export function getElementById(
	tagName: keyof HTMLElementTagNameMap
): HTMLElement | null {
	return document.getElementById(tagName);
}

// List elements
export function listElements(selectorId: string): Element[] {
	const elements = Array.from(document.querySelectorAll(selectorId));
	return elements;
}

// Check whether the element is visible in the screen
export function isInViewport(element: HTMLElement): boolean {
	const rectElement = element.getBoundingClientRect();
	return (
		rectElement.top >= 0 &&
		rectElement.left >= 0 &&
		rectElement.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rectElement.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
}

// Copy an element
export function copyElement(
	targetId: string,
	source: { id?: string; ele?: HTMLElement }
): IReturnType {
	const targetElement = document.getElementById(targetId);
	if (!targetElement)
		return {
			isDone: false,
			code: SHORT_CODE.TARGET_NOT_FOUND,
			message: MESSAGES.TARGET_NOT_FOUND,
		};
	let sourceElement = null;
	if (source.ele) {
		sourceElement = source.ele;
	} else if (source.id) {
		sourceElement = document.getElementById(source.id);
	}
	if (!sourceElement)
		return {
			isDone: false,
			code: SHORT_CODE.SOURCE_NOT_FOUND,
			message: MESSAGES.SOURCE_NOT_FOUND,
		};
	targetElement?.appendChild(sourceElement);
	return {
		isDone: true,
		code: SHORT_CODE.COPIED,
		message: MESSAGES.COPIED,
		ele: sourceElement,
	};
}

// Clone an element
export function cloneElement(sourceId: string, targetId: string): IReturnType {
	const sourceElement = document.getElementById(sourceId);
	if (!sourceElement)
		return {
			isDone: false,
			code: SHORT_CODE.SOURCE_NOT_FOUND,
			message: MESSAGES.SOURCE_NOT_FOUND,
		};
	const clonedElement = sourceElement.cloneNode(true);
	const targetElement = document.getElementById(targetId);
	if (!targetElement)
		return {
			isDone: false,
			code: SHORT_CODE.TARGET_NOT_FOUND,
			message: MESSAGES.TARGET_NOT_FOUND,
		};
	targetElement.appendChild(clonedElement);
	return {
		isDone: true,
		code: SHORT_CODE.CLONED,
		message: MESSAGES.CLONED,
		ele: targetElement,
	};
}

// Add a new element
export function addElement(
	sourceElement: HTMLElement,
	parentId: string
): IReturnType {
	const parentElement = document.getElementById(parentId);
	if (!parentElement)
		return {
			isDone: false,
			code: SHORT_CODE.TARGET_NOT_FOUND,
			message: MESSAGES.TARGET_NOT_FOUND,
		};
	parentElement?.appendChild(sourceElement);
	return {
		isDone: true,
		code: SHORT_CODE.ADDED,
		message: MESSAGES.ADDED,
		ele: sourceElement,
	};
}

// Remove an element
export function removeElement(elementId: string): IReturnType {
	const elementToRemove = document.getElementById(elementId);
	if (!elementToRemove)
		return {
			isDone: false,
			code: SHORT_CODE.TARGET_NOT_FOUND,
			message: MESSAGES.TARGET_NOT_FOUND,
		};
	const parentElement = elementToRemove.parentNode;
	if (parentElement) {
		parentElement.removeChild(elementToRemove);
	} else {
		return {
			isDone: false,
			code: SHORT_CODE.PARENT_NOT_FOUND,
			message: MESSAGES.PARENT_NOT_FOUND,
		};
	}
	return {
		isDone: true,
		code: SHORT_CODE.REMOVED,
		message: MESSAGES.REMOVED,
		ele: elementToRemove,
	};
}

// Add an element to a specific position
export function addElementToPosition(
	sourceId: string,
	parentId: string,
	position: number
): IReturnType {
	const parentElement = document.getElementById(parentId);
	if (!parentElement)
		return {
			isDone: false,
			code: SHORT_CODE.PARENT_NOT_FOUND,
			message: MESSAGES.PARENT_NOT_FOUND,
		};
	const sourceElement = document.getElementById(sourceId);
	if (!sourceElement)
		return {
			isDone: false,
			code: SHORT_CODE.SOURCE_NOT_FOUND,
			message: MESSAGES.SOURCE_NOT_FOUND,
		};
	if (position >= 0 && position < parentElement.children.length) {
		parentElement.insertBefore(sourceElement, parentElement.children[position]);
	} else {
		parentElement.appendChild(sourceElement);
	}
	return {
		isDone: true,
		code: SHORT_CODE.ADDED_TO_POSITION,
		message: MESSAGES.ADDED_TO_POSITION,
		ele: sourceElement,
	};
}
