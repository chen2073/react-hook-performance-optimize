A simple experiment of using the context API to emulate redux by providing a global accessible state for child components.
For each component, there is HOC layer to access global state. 
The actual rendered component would be wrapped in its layer and data(state) would be passed as props 
so react memo can be applied for optimizing rendering performance
