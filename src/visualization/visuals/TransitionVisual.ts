import { CSSProperties, ReactNode } from 'react';

export type EndHandler = (node: HTMLElement, done: () => void) => void;
export type EnterHandler = (node: HTMLElement, isAppearing: boolean) => void;
export type ExitHandler = (node: HTMLElement) => void;

export const UNMOUNTED = 'unmounted';
export const EXITED = 'exited';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';

export interface TransitionActions {
    appear?: boolean;
    enter?: boolean;
    exit?: boolean;
}

export type TransitionStatus =
    typeof ENTERING |
    typeof ENTERED |
    typeof EXITING |
    typeof EXITED |
    typeof UNMOUNTED;

export type TransitionChildren = ReactNode | ((status: TransitionStatus) => ReactNode);

export interface TransitionProps extends TransitionActions {
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    timeout: number | { enter?: number, exit?: number };
    addEndListener?: EndHandler;
    onEnter?: EnterHandler;
    onEntering?: EnterHandler;
    onEntered?: EnterHandler;
    onExit?: ExitHandler;
    onExiting?: ExitHandler;
    onExited?: ExitHandler;
    [prop: string]: any;
    children?: TransitionChildren;
}

export type TransitionHandlerKeys =
    | 'onEnter'
    | 'onEntering'
    | 'onEntered'
    | 'onExit'
    | 'onExiting'
    | 'onExited';

export type TransitionHandlerVisual = Pick<TransitionVisual, TransitionHandlerKeys>;

export type TransitionKeys =
    | 'in'
    | 'mountOnEnter'
    | 'unmountOnExit'
    | 'timeout'
    | 'addEndListener'
    | TransitionHandlerKeys;

export interface TransitionVisual extends TransitionActions, Partial<Pick<TransitionVisual, TransitionKeys>> {
    style?: CSSProperties;
}