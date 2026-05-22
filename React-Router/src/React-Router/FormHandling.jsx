import { Form, createBrowserRouter, RouterProvider } from "react-router-dom";

// --- 1. The Action Function ---
// This runs automatically when the user clicks the submit button
async function simpleAction({ request }) {
  // 1. Grab the bundle of data sent by the form
  const formData = await request.formData();

  // 2. Look inside the bundle for the specific input named "firstName"
  const typedName = formData.get("firstName");

  // 3. Print it to the console to prove we successfully got it!
  console.log("The user typed: " + typedName);

  return null;
}

// --- 2. The Page Component ---
export function SimplePage() {
  return (
    // The capital "F" Form component automatically manages its own state
    <Form method="post">
      {/* The 'name' attribute is the exact label the action uses to find this text */}
      <input type="text" name="firstName" placeholder="Type your name" />
      <button type="submit">Submit</button>
    </Form>
  );
}

// --- 3. The App Routing ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <SimplePage />,
    action: simpleAction, // We connect the action function to the route here
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
