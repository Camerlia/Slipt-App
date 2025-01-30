import Button from "./Button";

const AddFriendForm = () => {
  return (
    <form className={`mt-6 rounded-lg p-4 bg-green-300  text-white`}>
      <div className={`flex flex-row justify-between gap-3 mb-4`}>
        <label>Friend name</label>
        <input type={"text"} />
      </div>
      <div className={`flex flex-row gap-3 justify-between mb-4`}>
        <label>Image Url</label>
        <input type={"text"} />
      </div>
      <Button className={`px-6 py-2 rounded-lg bg-green-500`}>Add</Button>
    </form>
  );
};

export default AddFriendForm;
