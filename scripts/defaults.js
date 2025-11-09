import { GROUP } from './constants.js'

/**
 * Default layout and groups
 */
export let DEFAULTS = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    const groups = GROUP
    Object.values(groups).forEach(group => {
        group.name = coreModule.api.Utils.i18n(group.name)
        group.listName = `Group: ${coreModule.api.Utils.i18n(group.listName ?? group.name)}`
    })
    const groupsArray = Object.values(groups)
    DEFAULTS = {
        layout: [
            {
                nestId: 'abilities',
                id: 'abilities',
                name: coreModule.api.Utils.i18n('HM5E.Abilities'),
                groups: [
                    { ...groups.abilities, nestId: 'abilities_abilities' }
                ]
            },
            {
                nestId: 'inventory',
                id: 'inventory',
                name: coreModule.api.Utils.i18n('HM5E.Inventory'),
                groups: [
                    { ...groups.weapons, nestId: 'inventory_weapons' },
                    { ...groups.armor, nestId: 'inventory_armor' },
                    { ...groups.spells, nestId: 'inventory_spells' },
                    { ...groups.skills, nestId: 'inventory_skills' },
                    { ...groups.talents, nestId: 'inventory_talents' },
                    { ...groups.proficiencies, nestId: 'inventory_proficiencies' },
                    { ...groups.items, nestId: 'inventory_items' }
                ]
            },
            {
                nestId: 'utility',
                id: 'utility',
                name: coreModule.api.Utils.i18n('tokenActionHud.utility'),
                groups: [
                    { ...groups.combat, nestId: 'utility_combat' },
                    { ...groups.token, nestId: 'utility_token' },
                    { ...groups.utility, nestId: 'utility_utility' }
                ]
            }
        ],
        groups: groupsArray
    }
})
