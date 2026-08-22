## Redux - It's a state management library, it will basically store and manage all the application's states. The global state of an application is stored in an object tree within a single store called as Redux store.

State is Read-Only in Redux. What makes Redux predictable is that to make a change in the state of the application, we need to dispatch an action which describes what changes we want to make in the state.
These actions are then consumed by something known as Recuders, whose sole job is to accept two things(the action and current state of the application) and return new updated instance of the state.
Recuders do not change any part of the state, rather it produces a new instance of the state with all the necessary updates.

<div style="display:inline"><img src="docs/image.png" alt="Description" width="500" height="300" /> <img src="docs/image-1.png" alt="Description" width="500" height="300" /></div>



### Actions - The only way to change the state is to emit an action, which is an object describing what happened.
Every Action must have at least a **type** associated with it and data required for the state change denoted by **payload**.

#### Example - 
    {
        type: "",
        payload: {}
    }

    
    const dispatch = useDispatch();
    const addItemToCart = () => {
        return {
            type: "ADD_ITEM_TO_CART",    // Note: Every action must have a type key.
            payload: {
                bookName: "Harry Potter adn teh Goblet fier.",
                noOfItem: 1
            }
        }
    }



#### Reducers - Reducers are pure JavaScript functions that determine how an application's state changes in response to an action. As the name suggests, take in two things: current state and an action. Then they reduce it (read it & return) to one entity: the new updated instance of the state.

<img src="docs/image-2.png" width="500px" height="300px">

* There can either be one reducer if it is a simple app or multiple recuders taking care of different parts or slices of the global state in a bigger application. So whenever an action is dispatched, all the reducers are activated.


# Redux-Toolkit
The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

#### Steps - 
1. Create slice using `CreateSlice` function. Slice contains of Actions and Reducers.
    - Example:
        ![alt text](image-2.png)

2. Define initial value.
    - Example
        ![alt text](image-3.png)
3. Expot Actions and Reducers.
    - Example
        ![alt text](image-4.png)

4. Create Store using `configureStore`
    ![alt text](image-5.png)

5. Provide name of the store and list of recuders, available in `Slice.js`
6. Finally wrap the main Application root element with `<Provider/>`
        ![alt text](image-6.png)

7. Read values from store using `useSelector` from redux-toolkit.
   - Example
   - ![alt text](image-7.png)

8. Change the value in the store using with action defined in `Slice.js` using `useDispatch`
    - Example
    - ![alt text](image-8.png)
    - ![alt text](image-9.png)
    - call action from `Slice.js` and pass inside `dispatch(removeAllItems())`