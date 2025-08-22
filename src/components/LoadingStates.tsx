import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const EssayAnalysisLoading = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <Card className="shadow-elegant">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-16 w-16 rounded-full" />
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-2 w-full mb-4" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="shadow-elegant">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const SidebarSkeleton = () => (
  <div className="flex flex-col space-y-2 p-4">
    <Skeleton className="h-8 w-24 mb-4" />
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center space-x-3 p-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 flex-1" />
      </div>
    ))}
  </div>
);

export const HeaderSkeleton = () => (
  <div className="gradient-bg text-white py-20">
    <div className="container mx-auto px-4 text-center space-y-6">
      <Skeleton className="h-20 w-20 rounded-full mx-auto" />
      <div className="space-y-4">
        <Skeleton className="h-16 w-96 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>
      <div className="flex justify-center gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-32 rounded-full" />
        ))}
      </div>
    </div>
  </div>
);