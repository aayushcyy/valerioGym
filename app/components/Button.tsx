import React from "react";

interface ButtonProp {
  classname?: string;
  title: string;
  ghost?: boolean;
}

export default function Button({
  classname,
  title,
  ghost = false,
}: ButtonProp) {
  return (
    <div
      className={
        ghost
          ? `w-80 py-3 border-1 border-[#00000034] rounded-lg`
          : `w-80 py-3 bg-[#C1FF72] rounded-lg ${classname}`
      }
    >
      {title}
    </div>
  );
}
