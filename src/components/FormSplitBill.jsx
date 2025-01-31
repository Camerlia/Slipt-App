/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplit }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [paidByWho, setPaidByWho] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplit(paidByWho === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-green-300 p-4 md:p-12 text-green-500 rounded-md w-full md:w-auto`}
    >
      <h3 className={`text-2xl font-bold mb-4`}>
        Split Bill with {selectedFriend.name}
      </h3>
      <div className={`flex flex-col md:flex-row justify-between gap-3 mb-4`}>
        <label className="md:w-1/3">Bill value</label>
        <input
          type="text"
          className={`rounded-md px-3 w-full md:w-2/3 border border-gray-300`}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div className={`flex flex-col md:flex-row justify-between gap-3 mb-4`}>
        <label className="md:w-1/3">Your Expense</label>
        <input
          type="text"
          className={`rounded-md px-3 w-full md:w-2/3 border border-gray-300`}
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />
      </div>
      <div className={`flex flex-col md:flex-row justify-between gap-3 mb-4`}>
        <label className="md:w-1/3">{selectedFriend.name}&apos;s Expense</label>
        <input
          type="text"
          disabled
          className={`rounded-md px-3 w-full md:w-2/3 border border-gray-300`}
          value={paidByFriend}
        />
      </div>
      <div className={`flex flex-col md:flex-row gap-3 mb-4 items-center`}>
        <label className={`md:w-1/3`}>Who is paying</label>
        <select
          className={`text-green-500 px-4 rounded-md w-full md:w-2/3 border border-gray-300`}
          value={paidByWho}
          onChange={(e) => setPaidByWho(e.target.value)}
        >
          <option value={`user`}>User</option>
          <option value={`friend`}>{selectedFriend.name}</option>
        </select>
      </div>
      <div className="w-full">
        <Button
          className={`mt-6 px-6 py-2 text-white rounded-lg bg-green-500 w-full md:w-auto`}
        >
          Split Bill
        </Button>
      </div>
    </form>
  );
};

export default FormSplitBill;
