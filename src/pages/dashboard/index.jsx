import { useGetDashboardQuery } from "../../app/features/tasks/taskApiSlice";
import Card from "./components/card";

export default function Dashboard() {
  const { data } = useGetDashboardQuery(
    {},
    {
      refetchOnFocus: true,
    }
  );

  return (
    <div className="space-y-5">
      <Card amount={data?.totalTasks || 0} title="Total Tasks" />
      <p>Priority</p>
      <div className="flex flex-wrap gap-5">
        <Card amount={data?.prioritySummary?.High || 0} title="High" />
        <Card amount={data?.prioritySummary?.Medium || 0} title="Medium" />
        <Card
          amount={data?.prioritySummary?.Low || 0}
          title="Low
"
        />
      </div>
      <p>Status</p>
      <div className="flex flex-wrap gap-5">
        <Card amount={data?.statusSummary?.Pending || 0} title="Pending" />
        <Card
          amount={data?.statusSummary?.["In Progress"] || 0}
          title="In Progress"
        />
        <Card
          amount={data?.statusSummary?.Completed || 0}
          title="Completed
"
        />
      </div>
    </div>
  );
}
