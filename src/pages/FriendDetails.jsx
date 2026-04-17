import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaVideo,
  FaRegClock,
  FaArchive,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";
import friends from "../data/friends.json";
import NotFound from "./NotFound";

const FriendDetails = () => {
  const { id } = useParams();
  const { addEntry } = useContext(AppContext);
  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) return <NotFound />;

  const statusStyles = {
    "on-track": "bg-green-100 text-green-700",
    "almost due": "bg-amber-100 text-amber-700",
    overdue: "bg-red-100 text-red-700",
  };

  const nextDueLabel = new Date(friend.next_due_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added!`);
  };

  return (
    <section className="max-w-5xl mx-auto my-8 p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="space-y-3 lg:col-span-1">
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
            />
            <h2 className="text-base font-semibold text-black">
              {friend.name}
            </h2>
            <p className="text-xs text-gray-500 mt-1">{friend.email}</p>
            <span
              className={`inline-block mt-2 text-[11px] px-2 py-1 rounded-full capitalize ${statusStyles[friend.status]}`}
            >
              {friend.status}
            </span>
            <p className="text-xs text-gray-500 mt-2">Preferred email</p>
            <p className="text-sm italic text-gray-500 mt-3">"{friend.bio}"</p>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-white shadow-md rounded-md py-2 text-sm text-gray-500 hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <FaRegClock className="text-xs" /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white shadow-md rounded-md py-2 text-sm text-gray-500 hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <FaArchive className="text-xs" /> Archive
            </button>
            <button className="w-full bg-white border border-red-200 rounded-md py-2 text-sm text-red-600 hover:bg-red-50 transition flex items-center justify-center gap-2">
              <FaTrashAlt className="text-xs" /> Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
            <div className="bg-white shadow-md rounded-md px-6 py-10 text-center flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-black">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white shadow-md rounded-md px-6 py-10 text-center flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-black">{friend.goal}</p>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white shadow-md rounded-md px-6 py-10 text-center flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-black">{nextDueLabel}</p>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-md px-4 py-7">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-black">Relationship Goal</h3>
              <button className="text-xs px-3 py-1 shadow-md rounded-md text-gray-500 hover:bg-gray-50 transition flex items-center gap-1">
                <FaEdit className="text-[10px]" /> Edit
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Connect every{" "}
              <span className="font-semibold text-black">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-white  rounded-md p-4 shadow-md">
            <h3 className="font-semibold text-black mb-3">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => handleAction("Call")}
                className="bg-gray-100 rounded-md px-4 py-6 text-sm text-black hover:bg-gray-50 transition flex flex-col items-center gap-2"
              >
                <FaPhoneAlt />
                Call
              </button>
              <button
                onClick={() => handleAction("Text")}
                className="bg-gray-100 rounded-md px-4 py-6 text-sm text-black hover:bg-gray-50 transition flex flex-col items-center gap-2"
              >
                <FaEnvelope />
                Text
              </button>
              <button
                onClick={() => handleAction("Video")}
                className="bg-gray-100 rounded-md px-4 py-6 text-sm text-black hover:bg-gray-50 transition flex flex-col items-center gap-2"
              >
                <FaVideo />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
