/* eslint-disable react/prop-types */
import Friend from "./Friend";


const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  
  console.log(friends)
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
