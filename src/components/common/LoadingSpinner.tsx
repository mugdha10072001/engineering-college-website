
interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  fullScreen?: boolean;
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

export default function LoadingSpinner({
  size = "md",
  label = "Loading...",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const spinner = (
    <div
      className="flex flex-col items-center justify-center gap-3"
      role="status"
      aria-live="polite"
    >
      <span
        className={`${sizes[size]} animate-spin rounded-full border-slate-200 border-t-blue-700`}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-slate-600">
        {label}
      </span>
    </div>
  );

  if (!fullScreen) {
    return spinner;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
      {spinner}
    </div>
  );
}