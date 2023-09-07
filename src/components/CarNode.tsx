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
    <div className={`${color.bg} p-10`}>
      <Image width={64} height={40} alt={iconAlt} src={iconPath} />
      <h1
        className={`${fontBigSHoulders.className} text-neutral-gray my-9 text-5xl uppercase`}
      >
        {name}
      </h1>
      <p className="text-neutral-white">{desc}</p>
      <button
        className={`${color.textButton} bg-neutral-gray mt-6 rounded-l-full rounded-r-full px-10 py-4`}
        type="button"
      >
        Learn More
      </button>
    </div>
  )
}

export default CarNode
