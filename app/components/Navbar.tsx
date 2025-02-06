import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

function Navbar() {
  return (
    <div className='bg-zinc-100 py-2 border-b border-s-zinc-200 fixed z-10 w-full top-0'>
        <div className='container flex items-center justify-between'>
            <Link href='/'>Logo</Link>
            <Link href='/sign-in' className={buttonVariants()}>Sign in</Link>
        </div>
    </div>
  )
}

export default Navbar