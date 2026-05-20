1. Route Parameters (Dynamic URLs) Instead of creating a dedicated route for van #1 and van #2, React Router allows you to create a "placeholder" or "variable" inside your route path
   . You do this by adding a colon (:) before the parameter name.
   Example: <Route path="/vans/:id" element={<VanDetail />} />
   . This tells React Router, "Whenever the URL is /vans/ followed by anything, render the VanDetail component."

2. Dynamic Linking On your list page, you map over your array of data and create dynamic links using string interpolation to inject the item's unique ID

Example: <Link to={/vans/${van.id}}>View Van</Link>

3. The useParams Hook Once the user clicks that link and arrives at the VanDetail component, how does that component know which van to display? React Router provides a hook called useParams
   . It grabs the dynamic parameter right out of the URL bar and gives it to your component as an object
