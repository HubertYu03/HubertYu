import { useContent } from "@/lib/store/ContentStore";
import { useShallow } from "zustand/react/shallow";

type NavLinkProps = {
	label: string;
	contentId: string;
};

const NavLink = ({ label, contentId }: NavLinkProps) => {
	const { contentView, switchContentView, setContent } = useContent(
		useShallow((state) => ({
			contentView: state.contentView,
			switchContentView: state.switchContentView,
			setContent: state.setContent,
		})),
	);

	const handleClick = () => {
		if (!contentView) switchContentView();
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
