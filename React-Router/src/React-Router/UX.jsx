import { Form, useActionData, useNavigation, redirect } from "react-router-dom";

// --- 1. The Action Function ---
export async function loginAction({ request }) {
  const formData = await request.formData();
  const password = formData.get("password");

  // Pretend the correct password is "123"
  if (password !== "123") {
    // Return an error message directly to the component
    return "Wrong password! Please try again.";
  }

  return redirect("/dashboard");
}

// --- 2. The Page Component ---
export function LoginPage() {
  // Grab the error message returned from the action (if there is one)
  const errorMessage = useActionData();

  // Check the current status of the page
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Login Page</h1>

      {/* Conditionally display the error message in red */}
      {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}

      {/* Add 'replace' so the back button doesn't bring them back here */}
      <Form method="post" replace>
        <input type="password" name="password" placeholder="Password" />

        {/* Disable the button and change text while waiting for the server */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}

// // How this flows:
// The user types "abc" and clicks Log in.
// The button instantly grays out and says "Logging in..." because useNavigation detects the form is working
// The loginAction checks the password. It is wrong, so it returns "Wrong password!"
// The button goes back to normal, and useActionData grabs that message and prints it on the screen in red
// The user types "123". It is correct, so they are redirected to the dashboard
// Because we added replace, clicking "Back" will not trap them on the login screen
