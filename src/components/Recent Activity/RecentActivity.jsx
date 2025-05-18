import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  { text: "Published article 'SEO Tips'", time: "2 hours ago" },
  { text: "Edited draft 'AI Trends'", time: "5 hours ago" },
  { text: "Deleted article 'Outdated Info'", time: "1 day ago" },
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex justify-between text-muted-foreground">
            <span>{activity.text}</span>
            <span className="text-xs">{activity.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
