# React principles review

## Topics to cover

1. What is React?
2. Virtual DOM
3. Component based architecture
4. Component lifecycle
5. JSX
6. Unidirectional data flow
7. State & Props

### What is React?

1. What is React
   <details>
   <summary>Show Answer</summary>
   React is a Javascript library created to build responsive and performant front end applications. Its most notable features include the virtual DOM, a component based architecture, JSX, and a unidirectional data flow.
   </details>

### Virtual DOM

2. What is the virtual DOM?
   <details>
   <summary>Show Answer</summary>
   <img src='https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?fit=1173%2C785&ssl=1' height='250px'>

   The virtual DOM is a copy of the DOM that sits between our code and the actual DOM in the browser. It listens for changes in code and reflects those changes on the real dom. Rather than re-rendering the entire webpage when some aspect changes, the virtual dom allows us to only re-render the pieces of the site that actually change. This is possible because React applications are single page applications (SPAs). If you look at the [index.html](public/index.html) and [index.js](src/index.js) files you can see how they interact to render our application in the browser.
   </details>

### Component based architecture

1. What is a component?
   <details>
   <summary>Show Answer</summary>
   A component is a self-contained piece of code responsible for a specific element or feature of a website. A component can be either class based (created using javascript classes) or functional (created using a simple javascript function).
   </details>

2. What is a component based architecture?
   <details>
   <summary>Show Answer</summary>
   A component based architecture means that a website is built from individual components. Ideally, it should be made from as few unique components as possible, reusing components whenever possible. This can be thought of like a set of legos. You may have the same lego appear 100 times in constructing a single piece, but that individual lego only needed to be designed once. The principle is the same with components. If we can design our components in such a way that they are able to be reused we will save ourselves a lot of time when it comes to actually building the website.
   <img src='https://rubygarage.s3.amazonaws.com/uploads/article_image/file/575/component-based-architecture.jpg'>
   </details>

3. Why is a component based architecture beneficial?
   <details>
   <summary>Show Answer</summary>
   Efficiency and familiarity with components. As we build using reusable components we become more familiar with the individual pieces of our website and are able to use them dynamically and in creative ways. Through this we significantly reduce the cost of development and maintenance of our application because any problems or bugs we have will be localized to a single component rather than interspersed through our whole application. By extension this increases the reliability of our application.
   </details>

### Component lifecycle

1. What is the component lifecycle?
   <details>
   <summary>Show Answer</summary>
    The react component lifecycle refers to the life and death of a component in relation to its existence on the DOM.  It is made up of 3 parts: mounting, updating, and unmounting.  
    <img src='https://lh3.googleusercontent.com/proxy/QcKoMPU-e0I_ZkvwUN49TSLFyGo5G2JFAoXwzFphPcLLkwGVrYor1JBwyj3YXVAcmu5lqqdwD6RwrcFCfyOXXwot_zJSnx8hcw_NumFBz386pE46q3x583OnFHk49ICgWD1KMSQyOh1RTLgh4w' height='250px'>
   </details>

2. What are lifecycle methods?
   <details>
   <summary>Show Answer</summary>
   Lifecycle methods are functions that are called at different points in the component lifecycle.  We are able to utilize them to cause different events to happen when we want in the component lifecycle.  The most common lifecycle methods are: `constructor`, `render`, `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
   </details>

### JSX

1. What is JSX?
   <details>
   <summary>Show Answer</summary>
    JSX is a javascript extension that allows us to write html directly into our React components.  In many front-end libraries and frameworks, the html and javascript must be written in different files.  Bringing everything together allows us to see our entire component at once.  
   </details>

### state & props

1. What is state
   <details>
   <summary>Show Answer</summary>
   State is data stored locally in a component that is relevant to the functionality of that component.  This could be the value of an input box or the results of a network call that the component is responsible for displaying.  State may change but it must remain immutable.  We should only change the value of state by calling setState or by using the setter function provided by the useState hook when using react hooks.  
   </details>

2. What are props
   <details>
   <summary>Show Answer</summary>
   Props are data that are passed from one component to another.  The cannot be changed and should only be referenced.  Props can be anything: any data type, functions, even entire components!  
   </details>

### Unidirectional data flow

1. What is unidirectional data flow?
   <details>
   <summary>Show Answer</summary>
   Unidirectional data flow refers to the principle of React that data can only be passed from a parent component to a child component.  Events may be transmitted up the component tree but data must only be passed down, never up. 
   </details>
