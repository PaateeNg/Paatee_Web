"use client"

const SecondaryBtn = ({ text = "Click", center = false })  => {
  return (
    <div
    className={`flex  ${center
      ? "justify-center align-middle mt-8"
      : ""} `}
  >
    <span className="flex justify-center items-center w-[184px] h-[48px] rounded-[24px] font-bold text-[#F63D68] border border-[#F63D68]">
      {text}
    </span>
  </div>
  )
}

export default SecondaryBtn