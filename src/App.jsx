import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-10'>
        <img src="/images/gradient_logo.png" alt="" className='max-h-52 h-full' />
        <div>
          <span className="text-3xl font-light ">AWS User Group</span> <br />
          <span className="text-5xl font-bold">Ajolotes en la Nube</span>
        </div>
      </div>
      <span className='text-2xl font-light'>
        Próximamente nuestra web oficial
      </span>
    </>
  )
}

export default App
