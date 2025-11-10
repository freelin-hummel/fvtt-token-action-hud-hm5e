/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-hm5e'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '1.5'

/**
 * Action types
 */
export const ACTION_TYPE = {
    item: 'tokenActionHud.hm5e.item',
    weapon: 'tokenActionHud.hm5e.weapon',
    armor: 'tokenActionHud.hm5e.armor',
    spell: 'tokenActionHud.hm5e.spell',
    skill: 'tokenActionHud.hm5e.skill',
    ability: 'tokenActionHud.hm5e.ability',
    utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    weapons: { id: 'weapons', name: 'tokenActionHud.hm5e.weapons', type: 'system' },
    armor: { id: 'armor', name: 'tokenActionHud.hm5e.armor', type: 'system' },
    spells: { id: 'spells', name: 'tokenActionHud.hm5e.spells', type: 'system' },
    skills: { id: 'skills', name: 'tokenActionHud.hm5e.skills', type: 'system' },
    talents: { id: 'talents', name: 'tokenActionHud.hm5e.talents', type: 'system' },
    proficiencies: { id: 'proficiencies', name: 'tokenActionHud.hm5e.proficiencies', type: 'system' },
    items: { id: 'items', name: 'tokenActionHud.hm5e.items', type: 'system' },
    abilities: { id: 'abilities', name: 'tokenActionHud.hm5e.abilities', type: 'system' },
    combat: { id: 'combat', name: 'tokenActionHud.combat', type: 'system' },
    token: { id: 'token', name: 'tokenActionHud.token', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
    armor: { groupId: 'armor' },
    weapon: { groupId: 'weapons' },
    spell: { groupId: 'spells' },
    skill: { groupId: 'skills' },
    talent: { groupId: 'talents' },
    proficiency: { groupId: 'proficiencies' },
    item: { groupId: 'items' }
}
