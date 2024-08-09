"use client";

export default function PrimaryBtn({ text = "Click", center = false }) {
  return (
    <div
      className={`flex  ${center
        ? "justify-center align-middle mt-8"
        : ""} `}
    >
      <span className="flex justify-center items-center w-[184px] h-[48px] rounded-[24px] bg-[#F63D68] text-white">
        {text}
      </span>
    </div>
  );
}
