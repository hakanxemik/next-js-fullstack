import React from 'react'
import Image from "next/image"

function StudioLogo(props: any) {
  const {renderDefault, title} = props;

  return (
    <div>
      <Image 
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="/hakan-light.png"
        alt="Logo"
      />
    </div>
  )
}

export default StudioLogo