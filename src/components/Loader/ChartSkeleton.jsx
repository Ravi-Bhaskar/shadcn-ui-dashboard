import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ChartSkeleton = () => {
  return (
    <div className="w-full space-y-4">
        <Skeleton className="h-[400px] w-full bg-white" />
    </div>
  );
};

export default ChartSkeleton;
