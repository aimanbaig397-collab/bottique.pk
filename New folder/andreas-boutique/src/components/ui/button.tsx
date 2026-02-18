import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm letter-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink disabled:pointer-events-none disabled:opacity-50 rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-pink text-white hover:opacity-90 btn-pink',
        outline: 'border border-gray-light bg-transparent hover:bg-gray-soft hover:border-pink',
        ghost: 'hover:bg-gray-soft hover:text-pink',
      },
      size: {
        default: 'py-3 px-6 sm:px-8',
        sm: 'py-2 px-4',
        lg: 'py-4 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
