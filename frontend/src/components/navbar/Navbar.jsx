import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header className="max-w-screen-2xl mx-auto px-4 py-6">
			<nav className="flex justify-between items-center">
				{/* left side */}
				<div className="flex justify-center items-center gap-4">
					<Link to="/" className="size-6">
						<RiMenu2Fill />
					</Link>
					<div>
						<IoSearchOutline />
						<input
							type="text"
							placeholder="Search"
							className="bg-[#EAEAEA] w-full md:px-8 px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
				</div>

				{/* right side */}
				<div>nav items</div>
			</nav>
		</header>
	);
}

export default Navbar;
