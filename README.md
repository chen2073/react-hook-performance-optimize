A simple tryout of using the context API like redux to provide global accessible state for child components.
For each component, there is HOC layer to access global state values(what's in the global state). 
The actual rendered component would be wrapped in its layer and data(state) would be passed as props 
so that we can use react memo to optimize re-rendering
