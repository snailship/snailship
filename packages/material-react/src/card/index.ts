import OriginCard from './Card'
import Headline from './Headline'

export type CardProps = typeof OriginCard & {
  Headline: typeof Headline
}

const Card = OriginCard as CardProps
Card.Headline = Headline

export default Card