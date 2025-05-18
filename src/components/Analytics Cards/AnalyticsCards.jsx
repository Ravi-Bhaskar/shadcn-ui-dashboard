import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Pencil } from "lucide-react";

const stats = [
  {
    title: "Total Articles",
    value: 58,
    icon: FileText,
  },
  {
    title: "Published",
    value: 42,
    icon: CheckCircle,
  },
  {
    title: "Drafts",
    value: 16,
    icon: Pencil,
  },
];

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsCards;
