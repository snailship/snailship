import * as React from 'react'
import { IconButtonProps } from './interfaces'

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { className, style, variant, icon, ...rest } = props

    const classPrefix = 'material-icon-btn'
    const classNames = [className, classPrefix, `${classPrefix}_${variant}`]
    return (
      <button
        className={classNames.join(' ')}
        style={style}
        ref={ref}
        {...rest}
      >
        <span className={`material-icon`}>{icon}</span>
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
IconButton.defaultProps = {
  variant: 'standard',
  type: 'button',
  disabled: false,
}

export default IconButton
