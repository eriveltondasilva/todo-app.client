export default function LoginInputEmail() {
  return (
    <div>
      <label
        htmlFor='email'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
        Your email
      </label>
      <input
        type='email'
        name='email'
        id='email'
        className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
        placeholder='name@exemple.com'
        required
      />
    </div>
  )
}
