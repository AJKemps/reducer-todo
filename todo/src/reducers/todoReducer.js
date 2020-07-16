export const initialList = {
  todos: [
    {
      item: "learn about reducers",
      completed: false,
      id: new Date(),
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: new Date(),
          },
        ],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          console.log("does payload match id?", action.payload === todo.id);
          if (todo.id === action.payload) {
            console.log("reached true:", index);
            return { ...todo, completed: !todo.completed };
          } else {
            console.log("reached false:", index);
            return todo;
          }
        }),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false),
      };

    default:
      return state;
  }
};
