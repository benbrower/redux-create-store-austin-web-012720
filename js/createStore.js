function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

//initialize state
let store = createStore(reducer);
store.dispatch({ type: "@@INIT" });

//add buttton to increase count
let button = document.getElementById("button");

button.addEventListener("click", function () {
  store.dispatch({ type: "INCREASE_COUNT" });
});
