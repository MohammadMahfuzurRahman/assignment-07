import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Stats = () => {
  const { timeline } = useContext(AppContext);

  const data = [
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
  ];

  const colors = {
    Text: "#7c3aed",
    Call: "#1f5b4f",
    Video: "#34a36f",
  };

  const hasData = data.some((item) => item.value > 0);

  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        Friendship Analytics
      </h1>

      <div className="bg-white border border-slate-200 rounded-md p-4 md:p-6">
        <p className="text-xs text-slate-600 mb-3">By Interaction Type</p>

        <div className="w-full h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="43%"
                innerRadius={52}
                outerRadius={84}
                paddingAngle={4}
                stroke="#ffffff"
                strokeWidth={3}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={colors[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {!hasData && (
          <p className="text-center text-sm text-slate-500 -mt-2">
            No interactions yet. Add Call, Text, or Video from friend details.
          </p>
        )}
      </div>
    </section>
  );
};

export default Stats;
