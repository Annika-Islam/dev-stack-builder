# Dev Stack Builder

A modern web application that helps developers explore, evaluate, and curate the best technologies for their next web development project. Users can browse a curated list of technologies, view their details, and build their own personalized dev stack with just a few clicks.

##  Live Site

[Click here to visit the live site](https://your-live-site-link.com)

##  Technologies Used

- **React.js** — Frontend library for building the UI
- **Vite** — Fast build tool and development server
- **Tailwind CSS** — Utility-first CSS framework for styling
- **DaisyUI** — Tailwind component library
- **React-Toastify** — For showing toast notifications
- **Lucide React** — For modern icons
- **JSON** — For storing technology data

##  Key Features

1. **Explore Technologies** — Browse 12+ technologies with detailed information like category, description, difficulty, rating, and a badge. Each card has an "Add to Stack" button.

2. **Your Stack Sidebar** — Add technologies to your personal stack, view them in a sidebar, remove individual items, or clear the entire stack at once. The sidebar shows a live count of selected technologies.

3. **Responsive & Interactive UI** — Fully responsive across mobile, tablet, and desktop. Includes a mobile hamburger menu, a loading spinner while fetching JSON data, and toast notifications for every action (add, duplicate, remove, remove all).

##  React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code directly inside JavaScript. React uses JSX because it makes the UI code more readable and easier to write. Instead of writing `React.createElement()` for every element, we can write plain HTML-like syntax that looks familiar.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only, meaning the child cannot change them.

**State** is data managed inside a component itself. It can be changed using the `useState` hook. When state changes, the component re-renders to update the UI.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows us to add state to a functional component. It returns the current state value and a function to update it.

In this project, I used `useState` for:
- `technologies` — to store the list of technologies fetched from the JSON file.
- `stack` — to store the technologies the user added to their stack.
- `loading` — to show a loading spinner while fetching data.
- `isOpen` — in the Navbar to toggle the mobile hamburger menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects in a component, such as fetching data, subscribing to events, or updating the DOM.

I used `useEffect` to fetch the `technologies.json` file when the app first loads. Since fetching is an asynchronous side effect, it should not run during the initial render. `useEffect` is the correct place to run it.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` prop to identify which items in a list have changed, been added, or been removed. Without a unique key, React cannot efficiently update the DOM, which can cause bugs and performance issues.

In this project, I used `tech.id` as the key for each technology card.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used conditional rendering in the `YourStack` component:
- If `stackItems.length === 0`, it shows **"Your stack is empty."**
- Otherwise, it shows the list of selected technologies with a "Remove All" button.

Another example: the "Add to Stack" button shows **"✓ Added to Stack"** when `isAdded` is true.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Parent → Child:** Data is passed using **props**. For example, in `App.jsx`, I passed `tech` and `onAddToStack` to the `<TechCard />` component.

**Child → Parent:** A child sends data back by calling a function passed down as a prop. For example, when the user clicks "Add to Stack" inside `TechCard`, it calls `onAddToStack(tech)`, which is the parent's function that updates the `stack` state.

##  How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/dev-stack-builder.git

# Navigate to the project folder
cd dev-stack-builder

# Install dependencies
npm install

# Start the development server
npm run dev
