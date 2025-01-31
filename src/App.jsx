import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initials = [
  {
    id: 10,
    name: "Dorcas",
    image: `https://i.pravatar.cc/150?img=10`,
    balance: 10,
  },
  {
    id: 2,
    name: "Ajani",
    image: `https://i.pravatar.cc/150?img=24`,
    balance: 30,
  },
  {
    id: 3,
    name: "Favour",
    image: `https://i.pravatar.cc/150?img=3`,
    balance: 100,
  },
];

const App = () => {
  const [show, setShow] = useState(false);
  const [friends, setFriends] = useState(initials);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShow() {
    setShow((show) => !show);
  }
  function handleNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setSelectedFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend?.id ? null : friend));
  }
  function handleSplit(value) {
    setFriends(friends => friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend));
        setSelectedFriend(null)
  }
  return (
    <div className=" p-4 md:p-16 flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-start min-h-screen">
      <div className="md:max-w-sm w-full">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {show && <AddFriendForm onAddFriend={handleNewFriend} />}
        <Button
          className={`px-6 py-2 mt-6 rounded-lg bg-green-500 w-full md:w-auto`} 
          onClick={handleShow}
        >
          {show ? "Close Form" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <div className="md:max-w-sm w-full"> 
          <FormSplitBill onSplit={handleSplit} selectedFriend={selectedFriend} />
        </div>
      )}
    </div>
  );
};

export default App;
