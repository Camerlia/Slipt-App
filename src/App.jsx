import AddFriendForm from "./components/AddFriendForm";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const App = () => {
  return (
    <div className="text center p-16 flex flex-row gap-6 justify-center">
      <div className={'max-w-80'}>
        <FriendsList />
        <AddFriendForm />
      </div>
      <FormSplitBill/>
    </div>
  );
};

export default App;
