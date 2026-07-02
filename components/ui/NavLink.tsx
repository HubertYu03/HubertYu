import { useContent } from "@/lib/store/ContentStore";

type NavLinkProps = {
	label: string;
	contentId: string;
};

const NavLink = ({ label, contentId }: NavLinkProps) => {
	const switchContentView = useContent((state) => state.switchContentView);
	const setContent = useContent((state) => state.setContent);

	const handleClick = () => {
		switchContentView();
		setContent(contentId);
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className="hover:bg-white hover:text-mauve-900 hover:cursor-pointer
                        text-4xl transition ease-in w-fit p-1"
		>
			{label}
		</button>
	);
};

export default NavLink;
