import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { FiHeart, FiShoppingCart, FiBarChart2, FiEye } from "react-icons/fi";
import UsersBalances from "./UsersBalances";
import { FiDollarSign, FiClock, FiTrendingUp, FiFileText, FiTarget, FiCheckCircle, FiUsers } from "react-icons/fi";
import { FaCircle } from "react-icons/fa"; 
import dynamic from "next/dynamic";
import { dataset, valueFormatter } from '../dataset/weather';
import Box from '@mui/material/Box'; 


// This is for bar chart
const BarChart = dynamic(
  () => import("@mui/x-charts").then(mod => mod.BarChart),
  { ssr: false }
);

// This is for line chart
const LineChart = dynamic(
  () => import("@mui/x-charts").then((mod) => mod.LineChart),
  { ssr: false }
);
 
const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
      width: 60,
    },
  ],
  height: 300,
};

// This is for line chart
const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function Dashboard() { 
 
   const balances = [
    { name: "John", balance: "$1,200" },
    { name: "Alice", balance: "$950" },
    { name: "Mark", balance: "$2,340" },
  ];

  return (
    <div className="w-full bg-gray-100 md:p-6 p-0"> 

      {/* Welcome */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Dashboard</h2>
      </div>

      {/* Cards Section */}
      <div className="space-y-8"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Monthly Revenue */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FiDollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-700">₺245,000</div>
                  <div className="text-sm font-medium text-emerald-600">
                    Monthly Revenue
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">All time</span>
                <span className="text-sm font-semibold text-emerald-600">
                  +180%
                </span>
              </div>
            </div>

            {/* Pending Payments */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FiClock className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-700">₺32,500</div>
                  <div className="text-sm font-medium text-amber-600">
                    Pending Payments
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">All time</span>
                <span className="text-sm font-semibold text-emerald-600">
                  +45%
                </span>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-red-200 bg-gradient-to-br from-red-50 to-red-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FiFileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-700">₺67,800</div>
                  <div className="text-sm font-medium text-red-600">
                    Total Expenses
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">All time</span>
                <span className="text-sm font-semibold text-emerald-600">
                  +220%
                </span>
              </div>
            </div>

            {/* Net Profit */}
            <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-700">₺177,200</div>
                  <div className="text-sm font-medium text-blue-600">
                    Net Profit
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">All time</span>
                <span className="text-sm font-semibold text-emerald-600">
                  +190%
                </span>
              </div>
            </div>
          </div>          
        </div>
      {/* // Cards Section */}


      {/* Chart Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Bar chart */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 flex flex-col">
          <BarChart
            dataset={dataset}
            xAxis={[{ dataKey: "month" }]}
            series={[
              { dataKey: "london", label: "London", valueFormatter },
              { dataKey: "paris", label: "Paris", valueFormatter },
              { dataKey: "newYork", label: "New York", valueFormatter },
              { dataKey: "seoul", label: "Seoul", valueFormatter },
            ]}
            {...chartSetting}
            className="flex-1"
          />
        </div>

        {/* Line Chart */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 flex flex-col">
          <Box sx={{ width: "100%", height: "100%" }} className="flex-1">
            <LineChart
              series={[
                { data: pData, label: "pv" },
                { data: uData, label: "uv" },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              yAxis={[{ width: 50 }]}
              margin={margin}
            />
          </Box>
        </div>
      </div>
      {/* // Chart section */}

 
    
      <Row>
        <Col xl={12}>
          <UsersBalances balances={balances} />
        </Col>
        {/* <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col> */}
      </Row>
    </div>
  );
}
