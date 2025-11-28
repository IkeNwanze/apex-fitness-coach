import PreviewContainer from "./PreviewContainer";

interface SnapshotProps {
  title: string;
}

export default function MuscleHighlightPreview({ title }: SnapshotProps) {
  return (
    <PreviewContainer title={title}>
      <div className="flex flex-col items-center">
        {/* SVG Body Silhouette */}
        <svg
          viewBox="0 0 100 160"
          className="h-32 w-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <circle cx="50" cy="15" r="12" className="fill-zinc-300 dark:fill-zinc-600" />
          
          {/* Neck */}
          <rect x="46" y="27" width="8" height="8" className="fill-zinc-300 dark:fill-zinc-600" />
          
          {/* Shoulders - highlighted */}
          <ellipse cx="30" cy="40" rx="10" ry="6" className="fill-red-400" />
          <ellipse cx="70" cy="40" rx="10" ry="6" className="fill-red-400" />
          
          {/* Chest - highlighted */}
          <path
            d="M35 38 Q50 35 65 38 Q68 50 50 55 Q32 50 35 38"
            className="fill-red-400"
          />
          
          {/* Torso */}
          <rect x="38" y="55" width="24" height="25" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          
          {/* Abs - highlighted */}
          <rect x="42" y="58" width="16" height="18" rx="2" className="fill-red-400" />
          
          {/* Biceps - highlighted */}
          <ellipse cx="25" cy="55" rx="5" ry="12" className="fill-red-400" />
          <ellipse cx="75" cy="55" rx="5" ry="12" className="fill-red-400" />
          
          {/* Forearms */}
          <rect x="22" y="67" width="6" height="18" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          <rect x="72" y="67" width="6" height="18" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          
          {/* Hands */}
          <circle cx="25" cy="88" r="4" className="fill-zinc-300 dark:fill-zinc-600" />
          <circle cx="75" cy="88" r="4" className="fill-zinc-300 dark:fill-zinc-600" />
          
          {/* Hips */}
          <path
            d="M38 80 Q50 82 62 80 L62 90 Q50 92 38 90 Z"
            className="fill-zinc-300 dark:fill-zinc-600"
          />
          
          {/* Quads - highlighted */}
          <rect x="38" y="90" width="10" height="30" rx="3" className="fill-red-400" />
          <rect x="52" y="90" width="10" height="30" rx="3" className="fill-red-400" />
          
          {/* Lower legs */}
          <rect x="39" y="122" width="8" height="28" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          <rect x="53" y="122" width="8" height="28" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          
          {/* Feet */}
          <ellipse cx="43" cy="153" rx="6" ry="3" className="fill-zinc-300 dark:fill-zinc-600" />
          <ellipse cx="57" cy="153" rx="6" ry="3" className="fill-zinc-300 dark:fill-zinc-600" />
        </svg>
        
        {/* Legend */}
        <div className="mt-3 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <span className="text-zinc-600 dark:text-zinc-400">Target Areas</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <span className="text-zinc-600 dark:text-zinc-400">Other Muscles</span>
          </div>
        </div>
        
        {/* AI Badge */}
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          AI Body Analysis
        </div>
      </div>
    </PreviewContainer>
  );
}
