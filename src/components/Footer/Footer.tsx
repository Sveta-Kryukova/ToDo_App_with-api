import { memo } from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  filterTodos: string,
  todosLeft: Todo[],
  todosCompleted: number,
  onFilterTypeBotton: (filterTypeButton: string) => void,
  onClickClearComplited: () => void,
};

export const Footer: React.FC<Props> = memo(({
  filterTodos,
  todosLeft,
  todosCompleted,
  onFilterTypeBotton,
  onClickClearComplited,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      {filterTodos
        ? (
          <span className="todo-count" data-cy="todosCounter">
            {`${todosLeft.length} items left`}
          </span>
        ) : (
          <span className="todo-count" data-cy="todosCounter">
            0 items left
          </span>
        )}

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={classNames(
            'filter__link',
            { selected: filterTodos === 'All' },
          )}
          onClick={() => onFilterTypeBotton('All')}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={classNames(
            'filter__link',
            { selected: filterTodos === 'Active' },
          )}
          onClick={() => onFilterTypeBotton('Active')}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={classNames(
            'filter__link',
            { selected: filterTodos === 'Completed' },
          )}
          onClick={() => onFilterTypeBotton('Completed')}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
        onClick={onClickClearComplited}
        disabled={!todosCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
});
