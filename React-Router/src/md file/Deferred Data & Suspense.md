1. The Problem (Slow Loaders) We learned that Loaders are great because they get data before the new page loads. But what if your database is very slow? If a user clicks a link and the data takes 3 seconds to arrive, the screen will just freeze for 3 seconds
   . The user might think your app is broken.
2. The Solution (Defer & Suspense) We want the page to change immediately, show a friendly "Loading..." message, and then swap in the data when it finally arrives
   . React Router and React give us three tools to do this:
   defer: You put this in your Loader. It tells React Router, "Don't wait for this data. Just send a promise to the component and change the page right now"

<Suspense>: This is a tool from React. It wraps around your content and shows a "fallback" (like a loading screen) while it waits for the data

<Await>: This is a tool from React Router. It specifically waits for the delayed promise to finish, and then passes the real data into your HTML
