1. Link State (Passing Hidden Data) Sometimes you want to pass information from one page to another, but you do not want to put it in the URL (like we did with search parameters)

React Router lets you attach hidden data directly to a <Link> component using a prop called state
. When the user clicks the link and goes to the new page, that new page can grab the hidden data using a hook called useLocation

Note: This data is stored in the browser's internal memory, so if you copy and paste the URL to a friend, the hidden state will not go with it

2. Splat Routes (404 Page Not Found) If a user types a bad URL or clicks a broken link (like /blah-blah), React Router will not know what to show, and the screen will be broken or blank

To fix this, we create a "Catch-all" route (also called a Splat route). You do this by setting the path to an asterisk (path="\*")
. This acts as a safety net and tells your app: "If the URL does not match any of our real pages, show this 'Page Not Found' screen"
