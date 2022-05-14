import * as React from 'react'
import { Waveform } from '@uiball/loaders'
import { useTheme } from 'next-themes'

export type LoadingStateProps = {}

const ThemeLoader: React.FC<{ theme: string }> = ({ theme }) =>
  theme === 'dark' ? (
    <Waveform size={40} lineWeight={3.5} speed={1} color='#94a3b8' />
  ) : (
    <Waveform size={40} lineWeight={3.5} speed={1} color='#334155' />
  )

const LoadingState: React.FC<LoadingStateProps> = ({}) => {
  const { theme } = useTheme()

  return (
    <div className='flex flex-col gap-2 items-center'>
      <ThemeLoader theme={theme} />
      <div className='max-w-sm text-center text-xs text-slate-700 dark:text-slate-400 animate-pulse'>
        <span>Loading</span>
        <p>First loads may take a while due to free hosting plan limitations</p>
        <code>(asleep servers).</code>
      </div>
    </div>
  )
}

export default LoadingState
