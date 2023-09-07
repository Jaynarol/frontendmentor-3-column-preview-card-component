import CarNode from '@/components/CarNode'

export type Car = {
  name: string
  desc: string
  iconPath: string
  iconAlt: string
  color: {
    bg: string
    textButton: string
  }
}

const cars: Array<Car> = [
  {
    name: 'Sedans',
    desc: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: {
      bg: 'bg-primary-orange',
      textButton: 'text-primary-orange',
    },
    iconPath: './images/icon-sedans.svg',
    iconAlt: 'sedans car icon',
  },
  {
    name: 'SUVs',
    desc: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: {
      bg: 'bg-primary-cyan',
      textButton: 'text-primary-cyan',
    },
    iconPath: './images/icon-suvs.svg',
    iconAlt: 'suvs car icon',
  },
  {
    name: 'Luxury',
    desc: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: {
      bg: 'bg-primary-dark',
      textButton: 'text-primary-dark',
    },
    iconPath: './images/icon-luxury.svg',
    iconAlt: 'luxury car icon',
  },
]

const CarsGrid = () => {
  return (
    // <main className="mx-10 my-20 grid max-w-4xl sm:grid-flow-col [&_div:first-child]:rounded-t-lg sm:[&_div:first-child]:rounded-l-lg sm:[&_div:first-child]:rounded-tr-none [&_div:last-child]:rounded-b-lg sm:[&_div:last-child]:rounded-r-lg sm:[&_div:last-child]:rounded-bl-none">
    <main className="carsgrid mx-10 my-20 grid max-w-4xl sm:grid-flow-col">
      {cars.map((car) => (
        <CarNode key={car.name} car={car} />
      ))}
    </main>
  )
}

export default CarsGrid
