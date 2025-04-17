import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-blue-300 via-green-200 dark:from-gray-800 dark:to-gray-600 dark:via-gray-700 w-full overflow-x-hidden">
      <div className="container w-full mx-auto p-4">
        <div className="mb-8">
          <Skeleton className="w-full h-32" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <Skeleton className="w-full h-32" />
          </div>

          <div className="col-span-1">
            <Skeleton className="w-full h-32" />
          </div>

          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-1">
                <Skeleton className="w-full h-32" />
              </div>
              <div className="col-span-1">
                <Skeleton className="w-full h-32" />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <Skeleton className="w-full h-32" />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <Skeleton className="w-full h-32" />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <Skeleton className="w-full h-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
