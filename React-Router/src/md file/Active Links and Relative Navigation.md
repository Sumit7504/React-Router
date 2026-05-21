1. Making Links Look "Active" (<NavLink>) When you click a menu button on a website, that button usually stays highlighted or changes color to show you what page you are currently on

Instead of the regular <Link> tool, React Router gives you a special tool called <NavLink>
. <NavLink> is smart—it automatically checks the URL to see if it is the "active" (current) page
. You can give it a function that asks, "Is this link active?" If the answer is yes (isActive is true), you can tell it to apply a special style or class name

2. The end Prop (Fixing Overlaps) Sometimes, if you have a parent page with child pages inside it, React Router gets confused and highlights both the parent link and the child link at the same time
   . To fix this, you just add the word end to your parent <NavLink>. This tells the link to only highlight if the URL ends exactly on that path and not on a deeper child path

3. Relative Links (Going "Back") Just like moving through folders on your computer, you don't always have to type out the full URL path.
   If you want a link to point to the exact route folder you are currently inside, you can just use a single dot: to="."

   If you want to create a "Back" button to go up one level, you can use two dots: to=".."
