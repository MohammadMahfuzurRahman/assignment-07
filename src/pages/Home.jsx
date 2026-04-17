import FriendCard from "../components/FriendCard";
import SummaryCard from "../components/SummaryCard";
import { FaExclamationCircle } from "react-icons/fa";
import friends from "../data/friends.json";

const Home = () => {
  const total = friends.length;
  const overdue = friends.filter((f) => f.status === "overdue").length;
  const almost = friends.filter((f) => f.status === "almost due").length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;

  return (
    <>
      <div className="text-center my-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Friends to keep choose in your life
        </h1>
        <p className="text-gray-600 mb-6">
          SFriends to keep close in your life Your personal shelf of meaningful
          connections. Browse, tend, and nurture the relationships that matter
          most.
        </p>

        <button className="bg-green-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-green-600 transition">
          + Add a Friend
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 justify-items-center sm:w-[30rem] md:w-[45rem] mx-auto">
          <SummaryCard title="Total Friends" value={total} />
          <SummaryCard title="Overdue" value={overdue} />
          <SummaryCard title="Almost Due" value={almost} />
          <SummaryCard title="On Track" value={onTrack} />
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {friends.map((f) => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
