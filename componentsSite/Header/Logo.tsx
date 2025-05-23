import Image from 'next/image'

const Logo = () => {
  return (
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
  )
}

export default Logo