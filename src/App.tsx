
import React, { useEffect, useState } from 'react';

export default function App() {


  return (
    <>
      <div className='h-20 bg-blue-950 shadow-2xl flex justify-center'>
        <div>
          <p className='text-white text-7xl font-medium'>MEIO AMBIENTE</p>
        </div>
        <div>
          <a className='text-white hover:text-zinc-500' href='/dashboard'>Acessar</a>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <img src='/img/ambiente.jpg'></img>
      </div>
    </>
  );
}
