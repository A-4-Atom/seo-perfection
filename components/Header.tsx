import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="font-poppins text-2xl text-cyan-500 font-semibold w-full h-16 shadow flex justify-center items-center gap-4 mb-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      SEO Perfection
    </header>
  );
};

export default Header;
