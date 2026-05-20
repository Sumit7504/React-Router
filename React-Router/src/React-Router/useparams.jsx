import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// --- 1. The List Page ---
export function VanList() {
  // Pretend we fetched this array of data from an API
  const vans = [
    { id: "1", name: "Modest Explorer" },
    { id: "2", name: "Beach Bum" },
  ];

  return (
    <div>
      <h1>Explore our Vans</h1>
      {vans.map((van) => (
        <div key={van.id}>
          {/* Dynamically linking to /vans/1 or /vans/2 */}
          <Link to={`/vans/${van.id}`}>{van.name}</Link>
        </div>
      ))}
    </div>
  );
}

// --- 2. The Detail Page ---
export function VanDetail() {
  // useParams grabs the dynamic ':id' from the URL bar
  const params = useParams();

  // In a real app, you would use params.id to fetch the correct van's details from a database
  return <h1>Displaying details for Van #{params.id}</h1>;
}

// --- 3. The App Routing Setup ---
export default function Appuseparams() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vans" element={<VanList />} />
        {/* The colon indicates a dynamic route parameter */}
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
