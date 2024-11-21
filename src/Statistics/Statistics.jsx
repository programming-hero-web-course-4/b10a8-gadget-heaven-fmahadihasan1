import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = () => {
  const data = useLoaderData();


  return (
    <section className="bg-purple-600 text-white">
      <section className="max-w-7xl mx-auto p-20">
        <h1 className="text-center text-3xl mb-8 font-bold">Sales Statistics</h1>
        <p className="text-center text-xl mb-8 font-semibold">Visualizing Data Insights for Better Decision-Making</p>
        <LineChart
          width={1024}
          height={500}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
          <XAxis dataKey="title" stroke="#fff" />
          <YAxis dataKey={'stock_quantity'} stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="title" stroke="#82ca9d" />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
          <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
        </LineChart>
      </section>
    </section>
  );
};

export default Statistics;
