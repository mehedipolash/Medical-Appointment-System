import React, { useState, useEffect } from "react";
import { getAppointment, removeAppointment } from "../utilities";
import EmptyState from "../component/ui/EmptyState";
import BookingCard from "../component/BookingCard";

// ✅ Recharts imports
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// --- START: Dynamic Color Palette ---
const CHART_COLORS = [
  "#3B82F6", // Blue
  "#FBBF24", // Yellow
  "#0EA5E9", // Cyan
  "#10B981", // Green
  "#F59E0B", // Amber
  "#FF6347", // Orange/Red
  "#8B5CF6", // Purple
  "#EC4899", // Pink
];
// --- END: Dynamic Color Palette ---

/**
 * Custom Bar component to create the cone/triangle shape.
 */
const TriangleBar = (props) => {
  const { x, y, width, height, payload } = props;
  const fill = payload.color;

  const path = `M${x},${y + height} 
                L${x + width / 2},${y} 
                L${x + width},${y + height} 
                Z`;

  return <path d={path} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const [displayDoctors, setDisplayDoctors] = useState([]);

  useEffect(() => {
    const savedDoctors = getAppointment();
    setDisplayDoctors(savedDoctors);
  }, []);

  const handleDelete = (id) => {
    removeAppointment(id);
    setDisplayDoctors(getAppointment());
  };

  if (displayDoctors.length < 1) return <EmptyState />;

  const chartData = displayDoctors.map((doctor, index) => ({
    name: doctor.name,
    fee: doctor.fee,
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          My Today Appointments
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Your booked appointments for today. You can manage or remove any
          booking as needed.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 mb-10 w-full overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Doctors’ Fee Overview
        </h2>

        <div className="w-full h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                stroke="#ccc"
                strokeDasharray="1 5"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#666" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#666" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar
                dataKey="fee"
                shape={<TriangleBar />}
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayDoctors.map((doctor) => (
          <BookingCard
            key={doctor.id}
            doctor={doctor}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
