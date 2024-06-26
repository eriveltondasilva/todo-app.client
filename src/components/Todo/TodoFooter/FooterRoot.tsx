import { twJoin } from 'tailwind-merge'

// ============================================================================
type Props = { children: React.ReactNode }
export default function FooterRoot({ children }: Props) {
  return (
    <footer
      className={twJoin('flex w-full items-center justify-between', 'px-5 py-3 text-gray-400')}>
      {children}
    </footer>
  )
}
