import { useQuery } from '@tanstack/react-query'
import {
  getAssignmentGroups,
  getConfigurationItems,
} from '../../services/apiCaller'
import { Select } from '../select'

export function IncidentForm() {
  const { data: groups } = useQuery({
    queryFn: getAssignmentGroups,
    queryKey: ['assignment-groups'],
  })

  const { data: configurationItems } = useQuery({
    queryFn: getConfigurationItems,
    queryKey: ['configuration-items'],
  })

  return (
    <form className="flex flex-col items-start w-fit h-fit">
      <Select
        label="Assignment Group"
        placeholder="Select an assignment group"
        items={
          groups?.map((group) => ({
            label: group.name,
            value: group.sys_id,
          })) || []
        }
        setSelectedItem={(value: string) =>
          console.log('selecionei outro ', value)
        }
      ></Select>

      <Select
        label="Configuration Item"
        placeholder="Select a configuration item"
        items={
          configurationItems?.map((config) => ({
            label: config.name,
            value: config.sys_id,
          })) || []
        }
        setSelectedItem={(value: string) =>
          console.log('selecionei outro ', value)
        }
      ></Select>
    </form>
  )
}
