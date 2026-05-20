1. The BrowserRouter Component To give your React application the power of routing, you first need to wrap your entire app inside a component called BrowserRouter
   . Under the hood, this acts as a context provider that gives your entire application access to React Router's suite of navigation tools

2. Defining Paths with Routes and Route Once your app is wrapped, you need to tell it which components to display based on the URL.
   You start by placing a Routes component inside the BrowserRouter, which acts as a container for all your path definitions
   .
   Inside Routes, you define individual Route components
   .
   A Route takes two main props:
   path: This defines the URL (e.g., using just / for the home page, or /about for an about page)
   .
   element: This is the actual React component you want to render when the browser's URL matches that path

3. Navigating with the Link Component In a traditional website, you navigate between pages using HTML anchor tags (<a href="...">). However, in a React Single-Page Application, using an anchor tag is a bad idea because it triggers a full page refresh, which instantly destroys any local state your app was maintaining
   .
   To solve this, React Router provides the Link component
   .
   Instead of an href attribute, the Link component takes a to prop, which reads like English (e.g., <Link to="/about">About</Link>)
   .
   When a user clicks a Link, React Router intercepts the click, updates the URL, and seamlessly swaps out the components on the screen without ever refreshing the page or losing your app's state
