import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbar(props: any) {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#A3E4F1]">
          <ArrowUturnLeftIcon className="pr-2 h-6 w-6 text-[#A3E4F1]" />
          <h1>Go to Website</h1>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar