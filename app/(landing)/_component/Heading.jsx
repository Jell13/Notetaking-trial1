
import { Button } from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'


const Heading = () => {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-medium'>Where Notes, Documents, and more Notes gets Unified. Welcome to <span className='underline font-bold'>NoteNet</span> </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>NoteNet is the connected workspace where faster note taking happens</h3>
      <Button>
        Enter NoteNet
        <ArrowRight />
      </Button>
    
    </div>
  )
}

export default Heading
