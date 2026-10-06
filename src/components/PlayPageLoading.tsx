import PageLayout from '@/components/PageLayout';
import SakuraSpinner from '@/components/SakuraSpinner';

export type PlayLoadingStage =
  | 'searching'
  | 'preferring'
  | 'fetching'
  | 'ready';

const STAGE_PROGRESS: Record<PlayLoadingStage, string> = {
  searching: '32%',
  fetching: '32%',
  preferring: '64%',
  ready: '100%',
};

type PlayPageLoadingProps = {
  title?: string;
  message: string;
  stage?: PlayLoadingStage;
};

export default function PlayPageLoading({
  title,
  message,
  stage = 'searching',
}: PlayPageLoadingProps) {
  return (
    <PageLayout activePath='/play'>
      <div className='flex flex-col gap-3 px-5 py-4 lg:px-[3rem] 2xl:px-20'>
        <div className='py-1'>
          {title ? (
            <h1 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
              {title}
            </h1>
          ) : (
            <div className='h-6 w-36 rounded-md bg-sakura-100 dark:bg-sakura-950' />
          )}
        </div>

        <div className='lg:h-[500px] xl:h-[650px] 2xl:h-[750px]'>
          <div className='relative h-[300px] w-full overflow-hidden rounded-xl bg-neutral-950 shadow-lg lg:h-full'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <SakuraSpinner tone='onDark' label={message} />
            </div>
            <div className='absolute inset-x-0 bottom-0 h-0.5 bg-white/10'>
              <div
                className='h-full bg-sakura-400/85 transition-all duration-700 ease-out'
                style={{ width: STAGE_PROGRESS[stage] }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
