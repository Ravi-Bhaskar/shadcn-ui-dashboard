import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleTableSkeleton  = () => {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-4 w-[40%]" />
          <Skeleton className="h-4 w-[30%]" />
          <Skeleton className="h-4 w-[10%]" />
          <Skeleton className="h-4 w-[10%]" />
          <Skeleton className="h-8 w-16 ml-auto" />
        </div>
      ))}
    </div>
  );
};

export default ArticleTableSkeleton;
