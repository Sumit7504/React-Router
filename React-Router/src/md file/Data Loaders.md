Instead of loading a page and then waiting for data to arrive (which requires messy loading states and useEffect), Data Loaders fetch the data before the page even loads
. By the time your page appears on the screen, the data is already there and ready to use

Here is how you write it using the new createBrowserRouter

You get to delete a ton of code! You no longer have to manually track loading variables, write useEffect fetch requests, or save data into React state
. React Router manages it all for you automatically in the background.
