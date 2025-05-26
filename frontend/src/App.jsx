import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<nav><Navbar /></nav>
			<main className="min-h-screen max-w-2xl mx-auto py-6 font-primary">
				<h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
				<p className="mb-4">This is a simple application using React Router.</p>
				<p className="mb-4">
					Navigate through the app using the links in the navigation bar.
				</p>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	);
}

export default App;
