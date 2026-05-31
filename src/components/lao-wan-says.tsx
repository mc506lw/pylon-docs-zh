import { cn } from '@/lib/cn';

interface LaoWanSaysProps {
  date: string;
  children: React.ReactNode;
  className?: string;
}

export const LaoWanSays = ({ date, children, className }: LaoWanSaysProps) => {
  return (
    <div
      className={cn(
        'not-prose my-4 flex items-start gap-3 rounded-lg border border-fd-border bg-fd-card px-3 py-2.5',
        className
      )}
    >
      <img
        src="/img/老万大头.webp"
        alt="老万头像"
        className="mt-0.5 size-10 shrink-0 rounded-lg object-cover"
      />
      <div className="flex min-w-0 flex-col justify-center">
        <div className="mb-1 flex items-center gap-2 text-xs text-fd-muted-foreground">
          <span className="font-medium">mc506lw</span>
          <span>·</span>
          <span>{date}</span>
        </div>
        <div className="text-sm leading-relaxed text-fd-foreground">{children}</div>
      </div>
    </div>
  );
};