

// const Button = ({label, iconURL, backgroundColor, borderColor, textColor}) => {
//   return (
//     // change the color of the button here
//     <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
//     ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`: }
    
//     'bg-coral-red text-white border-coral-red}' rounded-full`}>
//         {label}
//         {iconURL && <img src={iconURL} alt="right arrow icon" className="ml-2 rounded-full w-5 h-5"/>}
//     </button>
//   )
// }

// export default Button

import React from 'react';

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  const buttonClasses = `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? `bg-${backgroundColor} text-${textColor} border-${borderColor}` : 'bg-coral-red text-white border-coral-red'}
    rounded-full ${fullWidth && 'w-full'}`;

  return (
    <button className={buttonClasses}>
      {label}
      {iconURL && <img src={iconURL} alt="right arrow icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;

