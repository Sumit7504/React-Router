import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// --- PAGE COMPONENTS ---

export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* 1. We pass hidden data using the 'state' prop */}
      <Link to="/dashboard" state={{ greeting: "Hello from the Home Page!" }}>
        Go to Dashboard
      </Link>
    </div>
  );
}

export function Dashboard() {
  // 2. We use 'useLocation' to read the hidden data passed by the Link
  const location = useLocation();
  const hiddenMessage = location.state?.greeting;

  return <h1>Dashboard: {hiddenMessage ? hiddenMessage : "No hidden data"}</h1>;
}

function NotFound() {
  // 3. This is the 404 page screen
  return <h1>404 - Sorry, this page does not exist!</h1>;
}

// --- APP ROUTING ---

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 4. The Splat Route (*) catches any broken or unknown links */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
