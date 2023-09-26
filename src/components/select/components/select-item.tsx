import * as Select from '@radix-ui/react-select'
import React from 'react'

import { Check } from 'lucide-react'

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  Select.SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={`rounded-md relative flex h-10 select-none items-center pl-6 pr-8 text-sm leading-none text-secondary data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-50 data-[disabled]:text-gray-300 data-[highlighted]:text-blue-600 data-[highlighted]:outline-none ${className}`}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
        <Check className="h-5 w-5 text-blue-600" />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

SelectItem.displayName = 'SelectItem'
