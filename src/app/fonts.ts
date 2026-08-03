import localFont from 'next/font/local'

export const roobert = localFont({
  src: [
    {
      path: './fonts/Roobert-TRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roobert-TRIAL-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Roobert-TRIAL-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-roobert',
})