import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 1. Create your Page Components
export function Home() {
  return <h1>home</h1>;
}

export function About() {
  return <h1>about</h1>;
}

// 2. Set up your App with Routing

export default function BasicRouting() {
  return (
    <BrowserRouter>
      <header>
        <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
          {/* Link components replace <a> tags to prevent full-page refreshes */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      {/* Routes acts as a container for your path definitions */}
      <Routes>
        {/* Route maps a specific URL path to a React component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
