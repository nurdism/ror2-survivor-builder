import { AttibuteType } from './attibute'

export enum SkillType {
  Passive = 'passive',
  Primary = 'primary',
  Secondary = 'secondary',
  Utility = 'utility',
  Special = 'special',
}

export interface Skill {
  id: string
  name: string
  color: string
  description: string
  type: SkillType
  cooldown?: number
  attibutes?: AttibuteType[]
  notes?: string[]
}
