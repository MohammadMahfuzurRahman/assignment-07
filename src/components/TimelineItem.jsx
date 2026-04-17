import { FaPhone, FaSms, FaVideo, FaHandshake } from "react-icons/fa";

const TimelineItem = ({ item }) => {
  const iconMap = {
    Call: <FaPhone className="text-slate-600" />,
    Text: <FaSms className="text-slate-600" />,
    Video: <FaVideo className="text-slate-600" />,
    Meetup: <FaHandshake className="text-amber-500" />,
  };

  return (
    <article className="flex items-start gap-3 px-4 py-3 bg-white">
      <div className="text-sm mt-1">{iconMap[item.type] || iconMap.Call}</div>

      <div className="leading-tight">
        <p className="text-sm font-semibold text-slate-700">{item.title}</p>
        <p className="text-xs text-slate-400 mt-1">{item.date}</p>
      </div>
    </article>
  );
};

export default TimelineItem;
