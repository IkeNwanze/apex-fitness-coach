interface PreviewContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function PreviewContainer({ title, children }: PreviewContainerProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900">
      <h3 className="mb-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        {title}
      </h3>
      {children}
    </div>
  );
}
