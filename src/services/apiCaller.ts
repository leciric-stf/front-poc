import { ConfigurationItem } from '../interfaces/ConfigurationItem'
import { Group } from '../interfaces/Group'

const headers = new Headers()
headers.set(
  'Authorization',
  'Basic ' +
    btoa('leciric' + ':' + ':O8r!pR%ZJUDkB+:![Jyq$fV1$enkh7%v54}^.34m'),
)

export async function getConfigurationItems() {
  // const response = await fetch(
  //   'https://dev165341.service-now.com/api/now/table/cmdb_ci?sysparm_limit=12',
  //   { method: 'GET', headers },
  // )
  // const data = await response.json()

  // const groupsMapped = data.result as ConfigurationItem[]

  // return groupsMapped

  return [] as ConfigurationItem[]
}

export async function getAssignmentGroups() {
  // const response = await fetch(
  //   'https://dev165341.service-now.com/api/now/table/sys_user_group?sysparm_limit=12',
  //   { method: 'GET', headers },
  // )
  // const data = await response.json()

  // const groupsMapped = data.result as Group[]

  // return groupsMapped
  return [] as Group[]
}
