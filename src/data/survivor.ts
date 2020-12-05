import { AttibuteType } from './attibute'
import { Stat, StatType } from './stat'
import { Skill, SkillType } from './skill'

export interface SurvivorInfo {
  id: string
  name: string
  description: string
  stats: Stat[]
  skills: Skill[]
}

export interface SurvivorInfos {
  [id: string]: SurvivorInfo
}

export const survivors: SurvivorInfos = {
  acrid: {
    id: 'acrid',
    name: 'Acrid',
    description: `Acrid is a melee-range hybrid who uses powerful poisons to melt tanky enemies.`,
    stats: [
      { id: StatType.Health, value: 160, add: 48 },
      { id: StatType.Regen, value: 2.5, add: 0.5 },
      { id: StatType.Damage, value: 15, add: 3 },
      { id: StatType.Speed, value: 7 },
      { id: StatType.Armor, value: 20 },
    ],
    skills: [
      {
        id: 'poison',
        name: 'Poison',
        color: '#C9F24D',
        type: SkillType.Passive,
        description: `{{attibute('${AttibuteType.Poisonous}')}} attacks apply a powerful damage-over-time.`,
        attibutes: [AttibuteType.Poisonous],
        // prettier-ignore
        notes: [
          `{{skill('poison')}} ticks 3 times per second for 10 seconds.`,
          `{{skill('poison')}} deals 1% of the victim's maximum health per second (0.33% per tick) or an amount per second equivalent to Acrid's damage stat, whichever deals more damage. {{skill('poison')}} is capped at 50 times Acrid's Damage per second.`,
          `{{skill('poison')}} damage is affected by armor and has the nonlethal tag.`,
          `{{skill('poison')}} is a Damage over Time effect, meaning it cannot Proc.`,
        ]
      },
      {
        id: 'blight',
        name: 'blight',
        color: '#C9F24D',
        type: SkillType.Passive,
        description: `Attacks that apply {{skill('poison')}} apply stacking {{skill('blight')}} instead, dealing {{stat('${StatType.Damage}', 60)}} per second.`,
        // prettier-ignore
        notes: [
          `Unlocked via the Acrid: Easy Prey Challenge. (As Acrid, land the killing blow on 50 total enemies that have 1 hit point left.)`,
          `{{skill('blight')}} ticks 3 times per second for 5 seconds.`,
          `{{skill('blight')}} deals {{stat('${StatType.Damage}', 60)}} per second. Each stack of {{skill('blight')}} increases the damage of each tick rather than adding more ticks.`,
        ]
      },
      {
        id: 'vicious-wounds',
        name: 'Vicious Wounds',
        color: '#C9F24D',
        attibutes: [AttibuteType.Regenerative],
        type: SkillType.Primary,
        description: `Maul an enemy for {{stat('${StatType.Damage}', 200)}}. Every 3rd hit is {{attibute('${AttibuteType.Regenerative}')}} and deals {{stat('${StatType.Damage}', 400)}}.`,
      },
      {
        id: 'neurotoxin',
        name: 'Neurotoxin',
        color: '#C9F24D',
        type: SkillType.Secondary,
        attibutes: [AttibuteType.Poisonous],
        description: `{{attibute('${AttibuteType.Poisonous}')}}. Spit toxic bile for {{stat('${StatType.Damage}', 240)}}.`,
        cooldown: 2000,
      },
      {
        id: 'ravenous-bite',
        name: 'Ravenous Bite',
        color: '#C9F24D',
        type: SkillType.Secondary,
        attibutes: [AttibuteType.Poisonous, AttibuteType.Regenerative],
        description: `{{attibute('${AttibuteType.Poisonous}')}}. {{attibute('${AttibuteType.Regenerative}')}}. Bite an enemy for {{stat('${StatType.Damage}', 310)}}. Deals up to 3x damage to low health enemies.`,
        cooldown: 2000,
        // prettier-ignore
        notes: [
          `Unlocked via the Acrid: Bad Medicine Challenge. (As Acrid, land the final blow on a Scavenger.)`, 
          `For every 1% of health the enemy is missing, the damage multiplier is increased by 2%.`
        ]
      },
      {
        id: 'caustic-leap',
        name: 'Caustic Leap',
        color: '#C9F24D',
        type: SkillType.Utility,
        attibutes: [AttibuteType.Poisonous, AttibuteType.Stunning],
        description: `{{attibute('${AttibuteType.Poisonous}')}}. {{attibute('${AttibuteType.Stunning}')}}. Leap in the air, dealing {{stat('${StatType.Damage}', 320)}}. Leave acid that deals {{stat('${StatType.Damage}', 25)}}.`,
        cooldown: 6000,
      },
      {
        id: 'frenzied-leap',
        name: 'Frenzied Leap',
        color: '#C9F24D',
        type: SkillType.Utility,
        attibutes: [AttibuteType.Stunning],
        description: `{{attibute('${AttibuteType.Stunning}')}} Leap in the air, dealing {{stat('${StatType.Damage}', 550)}}. Reduce the cooldown by 2s for every enemy hit.`,
        cooldown: 10000,
        // prettier-ignore
        notes: [
          `Unlocked via the Acrid: Pandemic Challenge. (As Acrid, inflict {{skill('poison')}} 1000 total times.)`,
          `Has 2 base charges`
        ]
      },
      {
        id: 'epidemic',
        name: 'Epidemic',
        color: '#C9F24D',
        type: SkillType.Special,
        attibutes: [AttibuteType.Poisonous],
        description: `Release a deadly disease that deals {{stat('${StatType.Damage}', 100)}}. The disease spreads to up to 20 targets.`,
        cooldown: 10000,
        // prettier-ignore
        notes: [
          `{{attibute('${AttibuteType.Poisonous}')}} If Epidemic hits a surface it will bounce to any nearby Monsters.`
        ]
      },
    ],
  },
}
