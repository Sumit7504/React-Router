This phase is all about the "Sad Path"—what happens when things go wrong (like a bad password) or when the internet is slow? React Router gives you three amazing tools to make your form feel like a professional website:

1. Catching Errors with useActionData If a user types the wrong password, you do not want the whole app to crash
   . Inside your action function, if the password is bad, you simply return an error message
   . Back in your component, you use a hook called useActionData() to grab that exact message and display it in red text

2. The "Submitting..." Status with useNavigation When a user clicks "Submit", it might take a second for the server to check the password. You want to disable the button so they don't click it twice. React Router gives you a hook called useNavigation()
   . It tracks the status of the app. If navigation.state equals "submitting", you can safely change the button text to "Logging in..."

3. Fixing the Back Button (replace) When a user successfully logs in and goes to their dashboard, you don't want them to click the browser's "Back" button and accidentally end up on the login screen again
   . To fix this, you just add the word replace to your <Form> component
   . This tells the browser to forget the login page ever existed in the history stack
