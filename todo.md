# React-71

## Module-01

### Less-01

    -   CRA
    -   hierarchy
    -   React.createElement(type,props,children)
    -   ReactDom.createRoot
    -   JSX
    -   work with collection
    -   key
    -   use function
    -   edit function to <Component/>
    -   props
    -   hierarchy components
    -   fragment
    -   conditional rendering

### Less-02

    -   children

    -   styled
    -   inLine style
    -   vanilla css
    -   module css
        -   composition class
        -   Classnames || clsx
    -   CSS in JS
        -   styled-components
        -   props

## Module 2

### Less 1

-   Class Component

-   Events

    -   Event delegation
    -   inLine clb Function
    -   clb function with context
        -   public values
        -   constructor && prototype
        -   SyntheticEvent Object vs Async

-   State

    -   react flow
    -   update state with setState(update)
    -   prevState
    -   upper state

-   Modal
-   To-Do List

### Less 2

-   onChange vs control form
-   onSubmit
-   class Form
-   form reset
-   checkBox
-   radio
    -   checked
    -   value
-   add todo

## Module 3

### Less 1

-   Mounting
-   Updating
-   Unmounting
-   componentDidMount
-   componentDidUpdate(prevProps, prevState)
-   componentWillUnmount

-   close modal by ESC
-   set data to localStorage

-   shouldComponentUpdate vs PureComponent

### Less 2

> > feef20bb6ec8430ab253f1d0367f9ccf

-   http how to use
-   architecture
    -   search -> app -> content
    -   validation search with react-hot-toast
    -   componentDidUpdate in content
    -   fetch in content
    -   loading in content
    -   destructuring state
-   http errors
-   pattern stateMachine with status['idle','pending','rejected','resolved']

# Module 4

### Less 1

-   useState
-   useState nothing save state
-   useState one State = one useState
-   useState convert class to hooks

-   useEffect
-   useEffect first render <Modal/>
-   useEffect every render <LoginForm/>
-   useEffect clear after render <Modal/>

-   useEffect first render <ToDo/>
-   useEffect update on any change <ToDo/>

-   edit class to huk <ContentInfo/>
-   if return <ContentInfo/>

### Less 2

-   refactor with toast <ToDo/>

-   useReducer <Counter/>
-   action.type
-   action.payload
-   dispatch

-   useMemo <TestUseMemo/>
-   complexCompute <TestUseMemo/>
-   useEffect vs useMemo <TestUseMemo/>

-   useCallback <TestUseMemo/>

-   async with useEffect

-   useContext
-   Provider
-   toggleState
-   useAlert

## Module 5

### Less 1

-   BrowserRouter <Index.js/>
-   Routes & Route <App.js/>
-   Link to <Header/>
-   Outlet & nested routes <HomePage/>
-   add <Layout/>
-   use index
-   PageDetails
-   useParams

### Less 2

-   useSearchParams
-   objectFromEntries
-   BackBtn with useLocation
-   location.state
-   lazy & suspense
-   loginPage
-   PrivateRoute

## Module 6

### Less 1

-   how it works
-   install redux

-   function createStore
-   function reducer
-   reducer default value
-   getState
-   dispatch
-   switch

-   redux connect to react
-   install react-redux
-   Provider

-   useSelector
-   useDispatch
-   set step
-   ...state

-   reducer.js
-   actions.js
-   types.js

-   initialState
-   combineReducer

### Less 2

-   redux-devtools
-   redux-toolkit
-   createAction
-   createReducer
    -   action.toString()
-   configureStore
-   combineReducer not use at the top level
-   selectors

-   redux persist
    -   combineReducer
    -   serializableCheck
    -   create persist for one state
    -   persist back object
    -   whitelist