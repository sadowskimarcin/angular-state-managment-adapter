import { StateManager } from './state-manager';
import { StateAction, StateSelect } from './state-manager.typings';

export abstract class StateManagerAbstractState<StateType> {
  protected abstract stateManager: StateManager<StateType>;

  public select: StateSelect<StateType> = selectPipe => {
    return this.stateManager.selectState$.pipe(selectPipe);
  };

  public action: StateAction<StateType> = (action, ...actionArgs) => {
    action.call(action, this.stateManager, ...actionArgs);
  };
}
