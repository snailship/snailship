import * as React from 'react'
import { CardHeadlineProps } from './interfaces'

const Headline = React.forwardRef<HTMLDivElement, CardHeadlineProps>((props, ref) => {
  const { className, style, title, subhead } = props
  const classNamePrefix = 'material-card-headline'
  const classNames = [
    className,
    classNamePrefix
  ]
  return <div className={classNames.join(' ')} style={style} ref={ref}>
    {title && <div className={`${classNamePrefix}__title`}>{title}</div>}
    {subhead && <div  className={`${classNamePrefix}__subhead`}>{subhead}</div>}
  </div>
})

Headline.displayName = 'Card.Headline'
Headline.defaultProps = {}

export default Headline
