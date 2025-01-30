import Friend from "./Friend";


const friends = [
    {   id: 10, 
        name: "Dorcas",
        image: `https://i.pravatar.cc/150?u=10`,
        balance: 10,
     },
     {   id: 2, 
        name: "Ajani",
        image: `https://i.pravatar.cc/150?u=24`,
        balance: 30,
     },
     {   id: 3, 
        name: "Favour",
        image: `https://i.pravatar.cc/150?u=3`,
        balance: 100,
     },
];

const FriendsList = () => {
  return <ul>
<Friend  friends={friends}/>
  </ul>;
};

export default FriendsList;
