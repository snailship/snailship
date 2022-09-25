import * as React from 'react'
import { CardProps } from './interfaces'

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, style, children, variant } = props
  const classNamePrefix = 'material-card'
  const classNames = [
    className,
    classNamePrefix,
    `${classNamePrefix}_${variant}`,
  ]
  return <div className={classNames.join(' ')} style={style} ref={ref}>{children}</div>
})

Card.displayName = 'Card'
Card.defaultProps = {
  variant: 'elevated'
}

export default Card
