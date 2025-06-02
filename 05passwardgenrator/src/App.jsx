import { useState, useCallback,useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(0)
  const [Number, setNumber] = useState(false);
  const [Character, setCharacter] = useState(false);
  const [Password, setPassword] = useState('');
  const PaswardGentrate = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(password);
  }, [length, Number, Character, setPassword]);

   useEffect(() => {
    PaswardGentrate()}, 
    [length, Number, Character, PaswardGentrate]);

  const PassRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    PassRef.current?.select();
    PassRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md  rounded-lg px-4  py-3  my-8  bg-gray-800  text-white">
      <h1 className='text-gray text-center my-3'>Password generator</h1> 
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="flex-1 px-3 py-2 bg-white text-gray-800 outline-none"
          placeholder="Password"
          readOnly
          ref = {PassRef} />
        <button
        onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex text-sm gap-x-2'>
          <input
          type= 'range'
          min="5"
          max="100"
          value={length}
          className ='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>length:{length}</label>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input
            type="checkbox"
            checked={Number}
            id='numberInput'
            onChange={() => {setNumber((prev)=> !prev);

            }}
          />
          <label>Number</label>
          <div className='flex items-center'>
            <input
              type="checkbox"
              checked={Character}
              id='characterInput'
              onChange={() => {setCharacter((prev)=> !prev);}}
            />
            <label>Character</label>
            </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
