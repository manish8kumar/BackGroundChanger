import {useState} from 'react'
function App() {
  const [color, setColor] = useState("#3a3d50")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap
       justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap
       justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
        <button onClick={()=>setColor('Green')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=>setColor('Yellow')}className='outline-none px-3  rounded-xl' style={{backgroundColor:'yellow'}}>Yellow</button>
        <button onClick={()=>setColor('Lavender')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'Lavender'}}>Lavender</button>
        <button onClick={()=>setColor('Red')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor('Blue')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=>setColor('Purple')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'purple'}}>Purple</button>
        <button onClick={()=>setColor('#E44EC3')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'#E44EC3'}}>Ext-1</button>
        <button onClick={()=>setColor('#F0EC8B')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'#F0EC8B'}}>Ext-2</button>
        <button onClick={()=>setColor('#1B2223')} className='outline-none px-3 rounded-xl' style={{backgroundColor:'#1B2223',color:'whitesmoke'}}>Ext-3</button>
        </div>
        </div> 
    </div>
  )
}

export default App
