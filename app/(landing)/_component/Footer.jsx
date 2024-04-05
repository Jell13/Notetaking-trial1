import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='flex items-center w-full dark:bg-[#1F1F1F] z-50 p-6 bg-background'>
      <Logo/>
      <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
        <Button variant="ghost" size="sm">
            Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
            Terms & Condition
        </Button>
      </div>
    </div>
  )
}

export default Footer
