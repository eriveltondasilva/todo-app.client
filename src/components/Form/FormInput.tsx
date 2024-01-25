export default function FormInput() {
  return (
    <input
      type='text'
      placeholder='Create a new todo...'
      name='title'
      id='title'
      className='w-full bg-transparent focus:outline-none'
      autoFocus
    />
  )
}
