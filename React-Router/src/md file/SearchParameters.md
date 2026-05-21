1. What are Search Parameters? Have you ever visited a website and noticed a question mark in the URL? For example: yoursite.com/vans?type=rugged
   . The part starting with the question mark is a search parameter. It is used to filter, sort, or divide long lists of data on a page

2. Why put filters in the URL instead of React State? If you only use normal React state to filter a list, that filter disappears if the user refreshes the page
   . Also, if a user finds a list of "rugged" vans they like and copies the link to send to a friend, the friend will just see the default, unfiltered page
   . By putting the filter inside the URL, it becomes a "single source of truth." The link becomes shareable, and anyone who clicks it will see the exact same filtered results

3. The useSearchParams Hook React Router gives you a special tool called useSearchParams to read and update these URL parameters. It is designed to look and feel exactly like React's useState hook
