# Phase 1: Introduction & Setup

# Multi-Page Applications (MPAs) vs. Single-Page Applications (SPAs)

Understanding the difference between these two architectures is the core concept of this phase:

- Multi-Page Applications (MPAs): This is the traditional way websites work. When you navigate to a new page (like clicking an "About" link), the browser makes a new request to the server, and the server sends back an entirely new HTML document
  . From the user's perspective, the old page is completely discarded, resulting in a visible "flicker" or full page reload
  .

- Single-Page Applications (SPAs): This is what React Router allows you to build. Despite the name, SPAs have multiple views or "pages," but the browser only loads a single web document one time
  . When you navigate to a new section, the React app intercepts the request and dynamically swaps out the content on your screen without requesting a new HTML page from the server
  . If it needs new data, it will fetch JSON data in the background, making the transition seamless and eliminating the page flicker

# The Core Package - To give your React application the power of routing, you must install and include a specific third-party module called react-router-dom
