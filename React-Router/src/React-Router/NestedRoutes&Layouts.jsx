import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

// 1. This is the Layout (The Frame)
export function MyLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* This is the hole where the other pages will show up! */}
      <Outlet />
    </div>
  );
}

export function Home() {
  return <h1>Home Page</h1>;
}
export function About() {
  return <h1>About Page</h1>;
}

// 2. This is the App Routing
export default function AppOutlet() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<MyLayout />}>
          {/* Child Routes (These go inside the Outlet) */}
          <Route index element={<Home />} /> {/* Default page */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
