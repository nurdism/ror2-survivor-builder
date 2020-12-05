export enum StatType {
  Health = 'health',
  Damage = 'damage',
  Regen = 'regen',
  Heal = 'heal',
  Armor = 'armor',
  Speed = 'speed',
  BlockChance = 'block_chance',
  CritChance = 'crit_chance',
  Luck = 'luck',
  Charges = 'charges',
  EquipmentCooldown = 'equipment_cooldown',
  SkillCooldown = 'skil_cooldown',
}

export interface Stat {
  id: StatType
  value: number
  add?: number
}
