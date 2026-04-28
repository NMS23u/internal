import { useAuthStore } from '../store/auth';

export default function Dashboard() {
  const { user } = useAuthStore();
  const role = user?.role;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {role === 'ADMIN' && (
          <>
            <StatCard title="Total Students" value="1,240" />
            <StatCard title="Revenue (Term)" value="$48,200" />
            <StatCard title="Attendance Rate" value="94%" />
          </>
        )}
        {role === 'STUDENT' && (
          <>
            <StatCard title="Current Term GPA" value="3.8" />
            <StatCard title="Attendance" value="96%" />
            <StatCard title="Fee Status" value="PAID" />
          </>
        )}
        {role === 'STAFF' && (
          <>
            <StatCard title="Classes Assigned" value="4" />
            <StatCard title="Pending Exams" value="2" />
            <StatCard title="Attendance Today" value="Marked" />
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}