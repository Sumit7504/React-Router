import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useLoaderData,
} from "react-router-dom";

// 1. Create a loader function that fetches your data
async function vansLoader() {
  const response = await fetch("/api/vans");
  const data = await response.json();
  return data.vans;
}

// 2. Create your Page Component
function VansPage() {
  // 3. Grab the data instantly using useLoaderData!
  // No useEffect or useState needed.
  const vans = useLoaderData();

  return (
    <div>
      <h1>Our Vans</h1>
      {vans.map((van) => (
        <div key={van.id}>{van.name}</div>
      ))}
    </div>
  );
}

// 4. Set up the Data Router
const router = createBrowserRouter(
  createRoutesFromElements(
    // Attach your loader to the specific route
    <Route path="/vans" element={<VansPage />} loader={vansLoader} />,
  ),
);

function App() {
  // 5. Wrap your app in RouterProvider instead of BrowserRouter
  return <RouterProvider router={router} />;
}

export default App;
