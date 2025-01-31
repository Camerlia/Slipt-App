/* eslint-disable react/prop-types */

import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div>
      <li
        className={`flex flex-row gap-3 p-4 ${
          isSelected ? "bg-green-200 rounded-md" : ""
        }`}
      >
        <div className={`flex flex-row gap-10 justify-between items-center `}>
          <div className={`w-14 h-14`}>
            <img
              src={friend.image}
              alt={friend.name}
              className={`rounded-lg`}
            />
          </div>

          <div className={`flex flex-col gap-1`}>
            <p>{friend.name}</p>
            <p
              className={`text-${
                friend.balance <= 0 ? "red" : "green"
              }-500 text-sm`}
            >
              {friend.balance <= 0
                ? `You owe ${friend.balance} Dollars`
                : `${friend.name} owes you ${friend.balance} Dollars`}
            </p>
          </div>
          <Button
            onClick={() => onSelection(friend)}
            className={`px-4 py-3 rounded-md bg-green-500 text-white`}
          >
            {isSelected ? "Close" : "Open"}
          </Button>
        </div>
      </li>
    </div>
  );
};

export default Friend;
