type SakuraSpinnerProps = {
  label?: string;
  size?: 'sm' | 'md';
  tone?: 'default' | 'onDark';
};

export default function SakuraSpinner({
  label,
  size = 'md',
  tone = 'default',
}: SakuraSpinnerProps) {
  const dim = size === 'sm' ? 'h-6 w-6' : 'h-8 w-8';
  const ring =
    tone === 'onDark'
      ? 'border-white/15 border-t-sakura-400'
      : 'border-sakura-200 border-t-sakura-500 dark:border-sakura-900/80 dark:border-t-sakura-400';
  const text =
    tone === 'onDark'
      ? 'text-white/60'
      : 'text-sakura-700/75 dark:text-sakura-200/70';

  return (
    <div
      className='flex flex-col items-center justify-center gap-3'
      role='status'
      aria-live='polite'
      aria-busy='true'
    >
      <div
        className={`${dim} animate-spin rounded-full border-2 ${ring}`}
        aria-hidden='true'
      />
      {label ? (
        <p className={`text-sm font-normal tracking-wide ${text}`}>{label}</p>
      ) : (
        <span className='sr-only'>加载中</span>
      )}
    </div>
  );
}
