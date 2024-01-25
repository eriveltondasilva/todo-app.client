// ============================================================================
type Props = { children: React.ReactNode }
export default function TodoList({ children }: Props) {
  return <ul className='divide-y divide-gray-200 dark:divide-gray-700'>{children}</ul>
}
