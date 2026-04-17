import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const statusStyle = {
    overdue: "bg-red-500",
    "almost due": "bg-yellow-500",
    "on-track": "bg-green-500",
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="shadow-md rounded-sm p-5 flex flex-col items-center gap-2">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-30 h-30 rounded-full object-cover"
        />

        <h2 className="text-lg font-semibold">{friend.name}</h2>

        <p className="text-sm text-gray-600">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-green-200 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className={`rounded-xl border-2 transition w-fit text-white px-2 ${statusStyle[friend.status]}`}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCard;
