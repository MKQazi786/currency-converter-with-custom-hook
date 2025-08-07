import React ,{useId} from "react";

function Input({
  amountFrom,
  onAmountChange,
}) {

   let amountId = useId();
   return (
     <>
      <input
        id={amountId}
        className="focus:outline-none mt-4 border-none rounded-md text-3xl py-2 "
        min={0}
        type="Number"
        placeholder="Amount"
        value={amountFrom}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
    </>
  );
}

export default Input;
