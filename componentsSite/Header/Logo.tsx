<<<<<<< HEAD
'use client'

=======
>>>>>>> 8438dc29ebf7b2fbe50b4fc1f0f8dd761dc25047
import Image from 'next/image'

const Logo = () => {
  return (
<<<<<<< HEAD
    <div className="mr-12 flex items-center gap-2">
      <Image
        src="/images/smfull.svg"
        alt="СПУТНИК МИРА"
        // width={100}
        // height={100}
        width={350}
        height={27}
        priority
      />
      {/* <div> */}
        {/* <div className="font-bold text-3xl"> */}
        {/* <div className="font-bold text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"> */}
          {/* <span className="text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">СПУТНИК </span>
          <span className="text-blue-600 [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">МИРА</span>
          <span className="text-red-600 [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">.РФ</span> */}
        {/* </div> */}
        {/* <div className="text-xs text-gray-500">Благотворительный фонд им. К.Э. Циолковского</div> */}
      {/* </div> */}
     </div>
=======
    <div className="mr-8 flex items-center gap-2">
      <Image
        src="/images/logo_sm.svg"
        alt="Логотип СПУТНИК МИРА"
        width={40}
        height={40}
      />
      <div>
        <div className="font-bold text-3xl text-blue-700">СПУТНИК МИРА</div>
        {/* <div className="text-xs text-gray-500">Благотворительный фонд им. К.Э. Циолковского</div> */}
      </div>
    </div>
>>>>>>> 8438dc29ebf7b2fbe50b4fc1f0f8dd761dc25047
  )
}

export default Logo