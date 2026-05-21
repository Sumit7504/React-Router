import { useSearchParams, Link } from "react-router-dom";

export function VanList() {
  // 1. Call the hook just like useState
  // It gives you the current parameters, and a function to update them
  const [searchParams] = useSearchParams();

  // 2. Read the specific "type" parameter from the URL using .get()
  const typeFilter = searchParams.get("type");

  return (
    <div>
      <h1>Explore our Vans</h1>

      <nav>
        {/* 3. You can use standard Links to change the URL's search parameters */}
        <Link to="?type=rugged">Rugged Vans</Link>
        <Link to="?type=luxury">Luxury Vans</Link>

        {/* Using "." means "go to the current route" without the query string, which clears the filter */}
        <Link to=".">Clear Filters</Link>
      </nav>

      {/* 4. Use the value to conditionally show UI or filter your data arrays */}
      <p>You are currently viewing: {typeFilter ? typeFilter : "All Vans"}</p>
    </div>
  );
}
