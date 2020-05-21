export const initialState = {
    todos: [
        {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
  {
    item: 'Complete Resume',
    id: 1528817077286,
    completed: false
  },
  {
    item: 'Update LinkedIn',
    id: 1528817084358,
    completed: false
  }

]
};

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD-TODO":
          return {
            todos: [
              ...state.todos,
              {
                item: action.item,
                completed: false,
                id: new Date(),
              },
            ],
          };
        case "TOGGLE-TODO":
          return {
            ...state,
            todos: state.todos.map((todo, index) =>
              index === action.index
                ? {
                    ...todo,
                    completed: !todo.completed,
                  }
                : todo
            ),
          };
        case "CLEAR-COMPLETE":
          return {
            ...state,
            todos: state.todos.filter((todo) => {
              return todo.completed !== true;
            }),
          };
        default:
          return state;
      }
    };