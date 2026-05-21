import { redirect } from "react-router-dom";

// 1. Create a helper function to check authentication
export async function requireAuth() {
  // Pretend we check a database or local storage here
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // If not logged in, instantly redirect them to the login page
    throw redirect("/login");
  }
  return null;
}

// 2. Use the helper inside a Protected Route's Loader
export async function dashboardLoader() {
  // Always check authentication BEFORE fetching secret data!
  await requireAuth();

  // If requireAuth didn't redirect them, they must be logged in.
  // Now it is safe to fetch the private data.
  const response = await fetch("/api/secret-dashboard-data");
  return response.json();
}
