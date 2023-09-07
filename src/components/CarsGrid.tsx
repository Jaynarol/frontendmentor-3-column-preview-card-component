import CarNode from '@/components/CarNode'

export type Car = {
  name: string
  desc: string
  iconPath: string
  iconAlt: string
  colors: {
    bg: string
    textButton: string
  }
}

const cars: Array<Car> = [
  {
    name: 'Sedans',
    desc: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    colors: {
      bg: 'bg-primary-orange',
      textButton: 'text-primary-orange',
    },
    iconPath: './images/icon-sedans.svg',
    iconAlt: 'sedans car icon',
  },
  {
    name: 'SUVs',
    desc: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    colors: {
      bg: 'bg-primary-cyan',
      textButton: 'text-primary-cyan',
    },
    iconPath: './images/icon-suvs.svg',
    iconAlt: 'suvs car icon',
  },
  {
    name: 'Luxury',
    desc: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    colors: {
      bg: 'bg-primary-dark',
      textButton: 'text-primary-dark',
    },
    iconPath: './images/icon-luxury.svg',
    iconAlt: 'luxury car icon',
  },
]

const CarsGrid = () => {
  return (
    <main className="carsgrid mx-10 my-20 grid max-w-4xl sm:grid-flow-col">
      {cars.map((car) => (
        <CarNode key={car.name} car={car} />
      ))}
    </main>
  )
}

export default CarsGrid
