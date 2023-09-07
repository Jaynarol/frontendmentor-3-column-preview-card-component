import Image from 'next/image'
import { Car } from '@/components/CarsGrid'
import { fontBigSHoulders } from '@/libs/fonts'

type Props = {
  car: Car
}

const CarNode = (props: Props) => {
  const { car } = props
  const { name, desc, color, iconPath, iconAlt } = car

  return (
    <div className={`${color.bg} flex flex-col p-10 sm:h-[500px]`}>
      <Image
        width={64}
        height={40}
        alt={iconAlt}
        src={iconPath}
        className="flex-none"
      />
      <h1
        className={`${fontBigSHoulders.className} my-9 text-5xl uppercase text-neutral-gray`}
      >
        {name}
      </h1>
      <p className="text-neutral-white">{desc}</p>
      <div className="grow"></div>
      <button
        className={`${color.textButton} mt-6 w-fit rounded-l-full rounded-r-full bg-neutral-gray px-8 py-3`}
        type="button"
      >
        Learn More
      </button>
    </div>
  )
}

export default CarNode
