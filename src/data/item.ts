import { StatType } from './stat'
import { Rarity } from './rarity'

export enum StackType {
  None = 'none',
  Linear = 'linear',
  Exponential = 'exponential',
  Hyperbolic = 'hyperbolic',
  Special = 'special',
}

export interface ItemEffect {
  stat: StatType
  stack: StackType
  value: number
  add: number
  limit?: number
  calc?: (cooldown: number, damage: number, amount: number) => number
}

export interface ItemInfo {
  id: string
  name: string
  summary?: string
  description: string
  rarity: Rarity
  effects: ItemEffect[]
}

export interface ItemInfos {
  [id: string]: ItemInfo
}

export const items: ItemInfos = {
  'armor-piercing-rounds': {
    id: 'armor-piercing-rounds',
    name: 'Armor-Piercing Rounds',
    summary: `Deal extra damage to bosses.`,
    description: `Deal an additional {{effect[0]}} damage to bosses.`,
    rarity: Rarity.Common,
    effects: [
      {
        stat: StatType.Damage,
        stack: StackType.Linear,
        value: 20,
        add: 20,
      },
    ],
  },
  'tougher-times': {
    id: 'tougher-times',
    name: 'Tougher Times',
    summary: `Chance to block incoming damage.`,
    description: `{{effect[0]}} chance to block incoming damage. Unaffected by luck.`,
    rarity: Rarity.Common,
    effects: [
      {
        stat: StatType.BlockChance,
        stack: StackType.Hyperbolic,
        value: 15,
        add: 15,
        calc: (cooldown: number, damage: number, amount: number) => 1 - 1 / (1 + 0.15 * amount),
      },
    ],
  },
  'fuel-cell': {
    id: 'fuel-cell',
    name: 'Fuel Cell',
    summary: `Hold an additional equipment charge. Reduce equipment cooldown.`,
    description: `Hold an additional {{effect[0]}} equipment charge. Reduce equipment cooldown by {{effect[1]}}.`,
    rarity: Rarity.Uncommon,
    effects: [
      {
        stat: StatType.Charges,
        stack: StackType.Linear,
        value: 1,
        add: 1,
      },
      {
        stat: StatType.EquipmentCooldown,
        stack: StackType.Exponential,
        value: 15,
        add: 15,
        calc: (cooldown: number, damage: number, amount: number) => (cooldown * (1 - 0.15)) ^ amount,
      },
    ],
  },
  'harvesters-scythe': {
    id: 'harvesters-scythe',
    name: `Harvester's Scythe`,
    summary: `'Critical Strikes' heal you.`,
    description: `Gain {{effect[0]}} critical chance. Critical strikes heal for {{effect[1]}} health.`,
    rarity: Rarity.Uncommon,
    effects: [
      {
        stat: StatType.CritChance,
        stack: StackType.None,
        value: 5,
        add: 0,
      },
      {
        stat: StatType.Heal,
        stack: StackType.Linear,
        value: 8,
        add: 4,
      },
    ],
  },
  'shaped-glass': {
    id: 'shaped-glass',
    name: `Shaped Glass`,
    summary: `Double your damage... BUT halve your health.`,
    description: `Increase base damage by {{effect[0]}}. Reduce maximum health by {{effect[1]}}.`,
    rarity: Rarity.Lunar,
    effects: [
      {
        stat: StatType.Damage,
        stack: StackType.Exponential,
        value: 100,
        add: 100,
      },
      {
        stat: StatType.Health,
        stack: StackType.Exponential,
        value: -50,
        add: -50,
      },
    ],
  },
}
