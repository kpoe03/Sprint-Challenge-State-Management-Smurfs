1. What problem does the context API help solve?
    - It solves the problem of prop drilling (getting data to parts of the react tree).

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions: is an object that tells the reducer how to change state and must contain a type property. It calls the reducer.
    - reducers: is a function that is triggered by an action and returns some state data. It updates the store.
    - store: is an object that returns state data of an application. It renders with new state (the middle man)

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state: is global - use when you want the state reachable by any component.
    - Component state: is local - use when you only want one component/sub component(s) to access the state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - is a middleware (code that sits between actions and reducers) that does something to the action before passing it down to reducer. It allows your action-creator to return a function instead of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
