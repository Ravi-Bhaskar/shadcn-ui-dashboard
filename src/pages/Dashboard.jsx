import AnalyticsCards from "../components/Analytics Cards/AnalyticsCards";
import Charts from "../components/Charts/Charts";
import ChartSkeleton from "../components/Loader/ChartSkeleton";
import RecentActivity from "../components/Recent Activity/RecentActivity";
import ArticleTable from "../components/DashboardTable/ArticleTable";
import { useEffect, useState } from "react";
import AnalyticSkeleton from "../components/Loader/AnalyticSkeleton";

const Dashboard = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="p-4 space-y-6 max-w-screen-2xl mx-auto bg-gray-100 rounded">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        {loading ? <AnalyticSkeleton /> : <AnalyticsCards />}
        {loading ? <ChartSkeleton /> : <Charts />}
        <ArticleTable limit={3} />
        <RecentActivity />
      </div>
  );
};

export default Dashboard;
