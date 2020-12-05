import { Rarity } from './rarity'

export interface EquipmentInfo {
  id: string
  name: string
  summary?: string
  description: string
  rarity: Rarity
  cooldown: number
}

export interface EquipmentInfos {
  [id: string]: EquipmentInfo
}

export const equipment: EquipmentInfos = {
  'blast-shower': {
    id: 'blast-shower',
    name: 'Blast Shower',
    summary: `Cleanse all negative effects.`,
    description: `Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.`,
    rarity: Rarity.Equipment,
    cooldown: 20000,
  },
  'jade-elephant': {
    id: 'jade-elephant',
    name: 'Jade Elephant',
    summary: `Gain massive armor for 5 seconds.`,
    description: `Gain 500 armor for 5 seconds.`,
    rarity: Rarity.Equipment,
    cooldown: 45000,
  },
}
