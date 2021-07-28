import { Observable, UnaryFunction } from 'rxjs';
import { StateManager } from './state-manager';

export type StateSelector<StateType, ReturnType> = UnaryFunction<Observable<StateType>, Observable<ReturnType>>;

export type StateAction<StateType> = <T extends (state: StateManager<StateType>, ...args: any[]) => void>(
    action: T,
    ...actionArgs: T extends (state: StateManager<StateType>, ...args: infer R) => void ? R : never
) => void;

export type StateSelect<StateType> = <ReturnType>(
    selectPipe: StateSelector<StateType, ReturnType>
) => Observable<ReturnType>;
