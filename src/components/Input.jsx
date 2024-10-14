const Input = () => {
  return (
    <div className='flex flex-col gap-4'>
      <textarea className='bg-white/20 md:w-96 h-40 rounded px-4 py-2 border border-white/10' placeholder='Your bookquote here' />
      <input className='bg-white/20 md:w-96 rounded px-4 py-2 border border-white/10' placeholder='Goodreads book url' />

      <button className='bg-white text-black md:w-96 px-4 py-2 rounded font-semibold'>Generate</button>

    </div>
  )
}

export default Input
