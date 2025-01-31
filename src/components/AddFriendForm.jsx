import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const AddFriendForm = ({onAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/150?img=");
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: image.startsWith("https://i.pravatar.cc/150?img=") ? `${image}${id}` : image, // Use the url state variable and handle default case
      balance: 0,
      
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/150?img=");
  }
  return (
    <form
      className={`mt-6 rounded-lg p-4 bg-green-300  text-green-900`}
      onSubmit={handleSubmit}
    >
      <div className={`flex flex-row justify-between gap-3 mb-4`}>
        <label>Friend name</label>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={`flex flex-row gap-3 justify-between mb-4`}>
        <label>Image Url</label>
        <input
          type={"text"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <Button className={`px-6 py-2 rounded-lg bg-green-500`}>Add</Button>
    </form>
  );
};

export default AddFriendForm;
