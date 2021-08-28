# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
-Like Redux, context api seeks to solve the problem of prop drilling. It creates a way to connect the props with the intended component directly.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-A store is the apps state tree. Actions are ways that you can manipulate state. Reducers implement state change logic based on information from the action; ie reducers listen for an action and trigger their state changes based on the actions payload.
-The store is a single source of truth because the initial is immutable and the only way to change the state is via actions and reducers.
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
It is middleware that allows for "delayed actions" and create asynchronous operation with our state and promises.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
-I prefered the context api method. It required much less syntax to write and was easier for me to understand how things were connecting. 