1. Global Error Boundaries Instead of writing an error screen for every single page when something goes wrong (the "Sad Path"), you can place one single errorElement at the very top of your routing setup
   . If any nested page anywhere in your app breaks or throws an error, that error will "bubble up" to the top
   . You then use a special hook called useRouteError to grab the exact error data and display a friendly message to the user

2. Moving to a Real Database (Firebase / Firestore) the app used a fake local server (called Mirage.js) to pretend it was getting data
   . In this final step, you delete that fake server and connect your app to a real, live database online called Google Firebase (Cloud Firestore)

3. Firestore Queries Because you are now using a real database, you stop using the standard internet fetch() requests and start using Firebase's special tools to get your data

   collection() and getDocs(): Used to download a whole list of items, like grabbing the list of all Vans

   doc() and getDoc(): Used to fetch just one specific item using its ID, like getting the details for a single Van
   .
   query() and where(): Used to filter data on the database side before downloading it. For example, asking the database to only give you vans where the hostID equals the currently logged-in user
