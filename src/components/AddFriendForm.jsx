import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/150?img=");
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: image.startsWith("https://i.pravatar.cc/150?img=")
        ? `${image}${id}`
        : image, // Use the url state variable and handle default case
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/150?img=");
  }
  return (
    <form
      className={`mt-6 rounded-lg p-4 bg-green-300 text-green-900 w-full md:w-auto`}
      onSubmit={handleSubmit}
    >
      <div className={`flex flex-col md:flex-row justify-between gap-3 mb-4`}>
        <label className="md:w-1/3">Friend name</label>{" "}
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full md:w-2/3 border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div className={`flex flex-col md:flex-row gap-3 justify-between mb-4`}>
        <label className="md:w-1/3">Image Url</label>

        <input
          type={"text"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full md:w-2/3 border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <Button className={`px-6 py-2 rounded-lg bg-green-500 w-full md:w-auto`}>
        Add
      </Button>
    </form>
  );
};

export default AddFriendForm;
