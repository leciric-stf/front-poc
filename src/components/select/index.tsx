/* eslint-disable @typescript-eslint/no-explicit-any */
import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { SelectItem } from './components/select-item'

interface SelectProps {
  label?: string
  items: { label: string; value: string }[]
  setSelectedItem: (value: any) => void
  placeholder?: string
  defaultValue?: string
}

export function Select({
  items,
  setSelectedItem,
  placeholder,
  label,
}: SelectProps) {
  return (
    <RadixSelect.Root onValueChange={setSelectedItem}>
      <RadixSelect.Group>
        <RadixSelect.Label className="text-sm">{label}</RadixSelect.Label>
        <RadixSelect.Trigger
          className="flex h-12 w-full items-center justify-center px-4 py-2 border border-gray-100 rounded-md"
          aria-label="Groups"
        >
          <RadixSelect.Value placeholder={placeholder}></RadixSelect.Value>
          <RadixSelect.Icon className=" text-black self-center">
            <ChevronDownIcon className="h-5 w-5" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className="overflow-hidden rounded-md  bg-white shadow-lg max-h-32 ">
            <RadixSelect.ScrollUpButton className="flex cursor-default items-center justify-center bg-white text-blue-600">
              <ChevronUpIcon className="h-6 w-6" />
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport className="p-1">
              <RadixSelect.Group>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </RadixSelect.Group>
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton className="flex cursor-default items-center justify-center bg-white text-blue-600">
              <ChevronDownIcon className="h-6 w-6" />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Group>
    </RadixSelect.Root>
  )
}
