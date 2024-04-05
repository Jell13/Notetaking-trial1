import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
        <Image src="/logo.svg" height="60" width="60" alt='logo'/>
        <p className={cn("font-semibold", font.classname)}>NoteNet</p>
    
    </div>
  )
}

export default Logo
