export default function FormInput() {
  return (
    <input
      type='text'
      name='title'
      id='title'
      className='w-full bg-transparent focus:outline-none'
      placeholder='Create a new todo...'
      autoFocus
    />
  )
}
