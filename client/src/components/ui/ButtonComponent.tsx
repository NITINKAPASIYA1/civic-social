import React from 'react';

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ buttonText,onClick }) => {
  return (
    <button
      className={"bg-[#309535] hover:bg-[#27af2e]  text-white font-bold h-[44px] w-[414px] py-2 px-4 rounded"}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonComponent;


