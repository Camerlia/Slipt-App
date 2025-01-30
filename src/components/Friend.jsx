/* eslint-disable react/prop-types */

const Friend = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => (
        <li key={friend.id} className={`flex flex-row gap-3 py-4`}>
        <div className={`flex flex-row gap-10 justify-between items-center `}>
        <div className={`w-14 h-14`}>
        <img src={friend.image} alt={friend.name} className={`rounded-lg`}/>
        </div>
          
          <div className={`flex flex-col gap-1`}>
            <p>{friend.name}</p>
            {friend.balance < 0 && (
              <p className={`text-red-500 text-sm`}>You owe {friend.balance} Dollars</p>
            )}
            {friend.balance > 0 && (
              <p className={`text-green-500 text-sm`}>
                {friend.name} owes you {friend.balance} Dollars
              </p>
            )}
          </div>
          <button className={`px-4 py-3 rounded-md bg-green-500 text-white`}>Select</button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Friend;
