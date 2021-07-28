import { BehaviorSubject, Observable } from 'rxjs';

export class StateManager<StateType> {
  private state$: BehaviorSubject<StateType>;
  public selectState$: Observable<StateType>;

  constructor(initialState: StateType) {
    this.state$ = new BehaviorSubject(initialState);
    this.selectState$ = this.state$.asObservable();
  }

  public updateState(state: Partial<StateType>): void {
    const newState = {
      ...JSON.parse(JSON.stringify(this.state$.getValue())),
      ...JSON.parse(JSON.stringify(state))
    };
    this.state$.next(newState);
  }

  public get stateSnapshot(): StateType {
    return this.state$.getValue();
  }
}
