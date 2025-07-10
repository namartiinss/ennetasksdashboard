import Image, { StaticImageData } from "next/image";
import React from "react";

interface ButtonLoginProps {
  textButtonLogin: string;
  icon?: string | StaticImageData;
}

function ButtonLogin({ textButtonLogin, icon }: ButtonLoginProps) {
  return (
    <button
      className="flex items-center justify-center gap-3 w-full p-3 rounded-md border-2 border-pink-200 cursor-pointer hover:bg-pink-light hover:text-primary transition duration-[.3s]"
    >
      {icon ? <Image src={icon} alt="" /> : ""} {textButtonLogin}
    </button>
  );
}

export default ButtonLogin;
