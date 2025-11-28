import PreviewContainer from "./PreviewContainer";

interface SnapshotProps {
  title: string;
}

export default function FitnessOverviewPreview({ title }: SnapshotProps) {
  const stats = [
    {
      label: "Time To Goal",
      value: "12 Weeks",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Sleep Target",
      value: "7-8 hrs",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      label: "Workouts / Week",
      value: "4-5",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      label: "Steps Per Day",
      value: "10,000",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <PreviewContainer title={title}>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl bg-zinc-50 p-3 transition-all duration-200 hover:bg-zinc-100 hover:shadow-sm dark:bg-zinc-800 dark:hover:bg-zinc-750"
          >
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              {stat.icon}
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{stat.value}</span>
          </div>
        ))}
      </div>
    </PreviewContainer>
  );
}
