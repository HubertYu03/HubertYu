type NavLinkProps = {
	label: string;
};

const NavLink = ({ label }: NavLinkProps) => {
	return (
		<button
			type="button"
			className="hover:bg-white hover:text-mauve-900 hover:cursor-pointer
                        text-2xl transition ease-in w-fit p-1"
		>
			{label}
		</button>
	);
};

export default NavLink;
