import { BehaviorSubject, Observable } from 'rxjs';
import { ToolsService } from '../../services/tools.service';

export class StateManager<StateType> {
    private state$: BehaviorSubject<StateType>;
    public selectState$: Observable<StateType>;

    constructor(
        initialState: StateType
    ) {
        this.state$ = new BehaviorSubject(initialState);
        this.selectState$ = this.state$.asObservable();
    }


    public updateState(state: Partial<StateType>): void {
        const newState = {
            ...ToolsService.deepClone(this.state$.getValue()),
            ...ToolsService.deepClone(state),
        };
        this.state$.next(newState);
    }

    public get stateSnapshot(): StateType {
        return this.state$.getValue();
    }
}
