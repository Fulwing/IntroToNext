// /app/dashboard/loading.tsx
export default function Loading() {
    return <div>Loading...</div>;
  }

//update the /app/dashboard/page.tsx file
import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}