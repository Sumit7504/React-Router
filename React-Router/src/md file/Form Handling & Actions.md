1. The Old Way (The Problem) In traditional React, building a form is notoriously difficult
   . You have to create react state (useState) for every single input, write an onChange function to track every keystroke, and write an onSubmit function to manually stop the page from refreshing

2. The New Way (The <Form> Component) React Router gives you a special component called <Form> (with a capital F)
   . It uses the native powers of standard HTML forms to manage its own state
   . Because of this, you can completely delete all of your useState tracking, onChange events, and onSubmit functions
   . All you have to do is give your form a method="post"

3. The action Function Just like we used a loader to get data before a page loads, we use an action function to handle data after a form is submitted

When the user clicks submit, React Router intercepts the form and sends the data directly to your action function

Inside the action, you can easily grab the input values using standard web tools like request.formData()
