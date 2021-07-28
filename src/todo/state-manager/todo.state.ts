import { StateManager } from '../../lib/state-manager/state-manager';
import { StateManagerAbstractState } from '../../lib/state-manager/state-manager-abstract-state';
import { TodoStateType } from '../todo-state.adapter';

export class TodoState extends StateManagerAbstractState<TodoStateType> {
  protected stateManager = new StateManager<TodoStateType>({
    todos: []
  });
}
