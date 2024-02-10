type Props = { children: React.ReactNode }

export default function LoginRoot({ children }: Props) {
  return (
    <section>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
        <div className='w-full rounded-lg bg-surface-light shadow dark:border dark:border-gray-700 dark:bg-surface-dark sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:px-10 sm:py-14 md:space-y-6'>{children}</div>
        </div>
      </div>
    </section>
  )
}
