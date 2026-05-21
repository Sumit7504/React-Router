This phase teaches you how to hide certain pages (like a private dashboard) so that only logged-in users can see them.

1. The Problem with the "Old Way" Before Data Loaders existed, developers would protect pages by simply checking if a user was logged in right as the page loaded
   . If they weren't, the app would just render a redirect component instead of the page

   However, Data Loaders fetch data before the page loads, and they all run in parallel
   . If we just hide the page component, the Loader will still run in the background and might accidentally download sensitive data that the user isn't supposed to see

2. The New Way (The redirect Function) To fix this, we have to stop the user inside the Loader itself. React Router provides a special function called redirect. If the Loader notices the user is not logged in, it will throw a redirect to instantly send them to the login page
   . Because this happens in the Loader, the page never loads and the sensitive data is never fetched
3. The requireAuth Helper Instead of typing the exact same login check inside every single Loader, the best practice is to create a utility function (e.g., requireAuth) that handles the check, and then you just place that function at the top of any Loader that needs protection
