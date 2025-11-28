import PreviewContainer from "./PreviewContainer";

interface SnapshotProps {
  title: string;
}

export default function RoadmapPreview({ title }: SnapshotProps) {
  const milestones = [
    { label: "Start", icon: "lightning" },
    { label: "Week 2", icon: "clock" },
    { label: "Week 4", icon: "check" },
    { label: "Week 8", icon: "check" },
    { label: "Goal", icon: "star" },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "lightning":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "clock":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "check":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case "star":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <PreviewContainer title={title}>
      <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:from-indigo-950 dark:to-indigo-900">
        <div className="relative flex items-center justify-between">
          {/* Gradient connector line */}
          <div className="absolute left-4 right-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-500 dark:from-blue-700 dark:via-indigo-600 dark:to-blue-500" />
          
          {milestones.map((milestone, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-transform duration-200 hover:scale-110 dark:bg-zinc-800 dark:text-blue-400">
                {renderIcon(milestone.icon)}
              </div>
              <span className="mt-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {milestone.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PreviewContainer>
  );
}
