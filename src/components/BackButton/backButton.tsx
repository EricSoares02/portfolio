'use client'
 
import { useRouter } from 'next/navigation'
import ArrowSvg from '../svgs/arrow'
 
export default function BackButton() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.back()}
    className='w-14 h-14 flex items-center justify-evenly text-sm'
    >
        <div className="rotate-90">
            <ArrowSvg size='30px' color='#ffffff' />
        </div>
        Back
    </button>
  )
}