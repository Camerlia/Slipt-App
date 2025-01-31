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
      className={`bg-green-300 p-12 text-green-500 rounded-md`}
    >
      <h3 className={`text-2xl font-bold`}>
        Split Bill with {selectedFriend.name}
      </h3>
      <div className={`my-4 flex flex-row justify-between gap-3 mb-4`}>
        <label>Bill value</label>
        <input
          type="text"
          className={`rounded-md px-3`}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div className={`my-4 flex flex-row justify-between gap-3 mb-4`}>
        <label>Your Expense</label>
        <input
          type="text"
          className={`rounded-md px-3`}
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
      <div className={`my-4 flex flex-row justify-between gap-3 mb-4`}>
        <label>{selectedFriend.name}&apos;s Expense</label>
        <input
          type={"disabled"}
          className={`rounded-md px-3`}
          value={paidByFriend}
        />
      </div>
      <label className={`mr-4`}>Who is paying</label>
      <select
        className={`text-green-500 px-4 rounded-md`}
        value={paidByWho}
        onChange={(e) => setPaidByWho(e.target.value)}
      >
        <option value={`user`}>User</option>
        <option value={`friend`}>{selectedFriend.name}</option>
      </select>
      <div>
        <Button className={`mt-6 px-6 py-2 text-white rounded-lg bg-green-500`}>
          Split Bill
        </Button>
      </div>
    </form>
  );
};

export default FormSplitBill;
