'use client'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="mr-12 flex items-center gap-2">
      <Link href="/">
        <Image  
          src="/images/smfull.svg"
          alt="СПУТНИК МИРА"
          width={350}
          height={27}
          priority
        />
      </Link>
    </div>
  )
}

export default Logo
