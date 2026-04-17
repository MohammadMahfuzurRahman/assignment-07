import { useContext, useMemo, useState } from "react";
import TimelineItem from "../components/TimelineItem";
import { AppContext } from "../context/AppContext";

const Timeline = () => {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState("All");

  const filteredTimeline = useMemo(() => {
    if (filter === "All") return timeline;
    return timeline.filter((item) => item.type === filter);
  }, [timeline, filter]);

  return (
    <section className="max-w-3xl min-h-screen mx-auto mt-6 px-2">
      <div>
        <div className="p-4">
          <h1 className="text-3xl font-bold text-slate-800">Timeline</h1>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mt-3 w-full max-w-[220px] rounded-sm px-2 py-1 text-sm text-slate-600"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {filteredTimeline.length === 0 ? (
            <p className="p-4 text-sm text-slate-500">
              No timeline activity yet. Add Call, Text, or Video actions from a
              friend details page.
            </p>
          ) : (
            filteredTimeline.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
