import { Car } from '@/components/CarsGrid'
import { fontBigSHoulders } from '@/libs/fonts'

type Props = {
  car: Car
}

const CarNode = (props: Props) => {
  const { car } = props
  const { name, desc, colors, iconPath, iconAlt } = car

  return (
    <section className={`${colors.bg} flex flex-col p-10 sm:h-[500px]`}>
      <picture>
        <img alt={iconAlt} src={iconPath} />
      </picture>
      <h1
        className={`${fontBigSHoulders.className} my-9 text-5xl uppercase text-neutral-gray`}
      >
        {name}
      </h1>
      <p className="text-neutral-white">{desc}</p>
      <div className="grow"></div>
      <button
        className={`${colors.textButton} mt-6 w-fit rounded-l-full rounded-r-full border-2 bg-neutral-gray px-8 py-3 active:border-neutral-gray active:bg-transparent active:text-neutral-gray`}
        type="button"
      >
        Learn More
      </button>
    </section>
  )
}

export default CarNode
