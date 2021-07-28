import { StateManager } from '../../lib/state-manager/state-manager';
import { StateManagerAbstractState } from '../../lib/state-manager/state-manager-abstract-state';

export class TodoState extends StateManagerAbstractState<TodoState> {
  protected stateManager = new StateManager<TodoState>({
    todos: []
  });
}
