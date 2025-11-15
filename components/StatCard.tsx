interface StatCardProps {
  count: string;
  description: string;
}

export default function StatCard({ count, description }: StatCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <div className="text-4xl font-bold text-accent-yellow mb-2">{count}</div>
      <div className="text-gray-600 font-medium">{description}</div>
    </div>
  );
}