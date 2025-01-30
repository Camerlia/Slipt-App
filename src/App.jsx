import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const App = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow((show) => !show);
  }
  return (
    <div className="text center p-16 flex flex-row gap-20 justify-center items-start">
      <div className={"max-w-80"}>
        <FriendsList />
        {show && <AddFriendForm />}
        <Button
          className={`px-6 py-2 mt-6 rounded-lg bg-green-500`}
          onClick={handleShow}
        >
          {show ? "Close Form" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
