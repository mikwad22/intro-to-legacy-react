/*
DIFFERENCES BETWEEN FUNCTIONAL AND CLASS COMPONENTS

    - SYNTAX
        - the most obvious difference between functional and class components is the syntax
        - a class component requires you to extend from React.Component and create a render function which returns the
        React element. This requires more code but also unlocks the use of other features - like state.

    - STATE (create a class component or make sure parent component is a class to pass down)
        - becuase functional components are just plain JS functions, you can't use setState() in them, Functional
        components are also known as stateless components.
        - if you need a state in you component, you will either need to create a class component, or make sure your
        parent component is a class component so you can pass down the state via props.

    - LIFECYCLE METHODS
        - Lifecycle methods are another feature you cannot use with functional components, and you can only use with
        class components - just like state. Both state and Lifecycle methods come from the React.Component you extend
        form in class components.

    - WHY USE FUNCTIONAL COMPONENTS AT ALL?
        - functional components are easier to read and test since they are just plain JS functions without state or
        lifecycle methods
        - Less code
        - help you implement best practices. It will get easier to seperate stateful and stateless components since you
        need to think and plan your components out more, without both class and functional components having access to
        all of the react Logic we need.


LIFECYCLE METHODS

    - React components have whats known as a lifcycle. The difference point during the lifecycle of a React component are
    accesible vis lifecyle methods
        - the basic lifecycle of a React Component:
            - creation
            - mounted
            - unmounted
            - destroyed
        - each of these phases of a components lifecycle have methods that are called automatically at each point during
        the lifecycle, that give you controld over what happens at the time those methods are invoked

        NOTE: lifecycle methods are intended to be a last resort. They are to be used in special cases, when other
        fallbacks like rearranging you components or moving your state around wont work
            - there are edge cases here, Like fetching from an API. You can't guarantee that you fetch will resolve
            before the component finishes mounting. If it did, you'd be trying to setState on an unmounted component,
            which will throw you an error.
*/