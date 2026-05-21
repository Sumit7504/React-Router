1. Layouts (The Picture Frame) When you build a website, you often have a top menu or a bottom section that shows up on every page
   . Instead of copying and pasting this menu on every single page, React Router lets you create a Layout
   . A Layout route holds the shared parts of your design so you do not have to repeat yourself

2. The <Outlet /> Component (The Hole for the Picture) If your Layout is the frame, how does it know where to put the picture? React Router gives you a special tool called <Outlet />
   . You put <Outlet /> inside your Layout to act like a placeholder or a "hole" for the child pages

3. Nested Routes (Pages inside Pages) To make this work, you put routes inside other routes in your code
   The Parent Route is the Layout (the frame).
   The Child Routes are the inner pages (the pictures). When a user clicks a link, the Layout stays on the screen, and the <Outlet /> swaps out the child content

4. Index Routes (The Default Picture) What if someone looks at the frame but hasn't picked a specific picture yet? An Index Route is the default page that shows up inside the <Outlet /> when the user is at the parent's main link.
