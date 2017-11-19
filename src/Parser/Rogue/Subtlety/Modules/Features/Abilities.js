import SPELLS from 'common/SPELLS';
import CoreAbilities from 'Parser/Core/Modules/Abilities';
import ISSUE_IMPORTANCE from 'Parser/Core/ISSUE_IMPORTANCE';

/* eslint-disable no-unused-vars */

class Abilities extends CoreAbilities {
  static ABILITIES = [
    ...CoreAbilities.ABILITIES,
    {
      spell: SPELLS.VANISH,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      //Vanish is often delayed.
      recommendedCastEfficiency: 0.90,
    },
    {
      spell: SPELLS.SHADOW_BLADES, // TODO: Reduced by Convergence of Fates
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 180,
      recommendedCastEfficiency: 1.0,
    },
    {
      spell: SPELLS.SYMBOLS_OF_DEATH,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: (haste, combatant) => (30 - (combatant.hasBuff(SPELLS.SUB_ROGUE_T20_2SET_BONUS.id) ? 5 : 0)), 
      recommendedCastEfficiency: 0.95,
      importance: ISSUE_IMPORTANCE.MAJOR,
      extraSuggestion: "This is the most important rotational ability, try to allways use it on cooldown.",      
    },
    {
      spell: SPELLS.SHADOW_DANCE,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 60, // TODO: Reduced by a passive.
      charges: 2,
      recommendedCastEfficiency: 1,
    },
    {
      spell: SPELLS.GOREMAWS_BITE,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 60,
      recommendedCastEfficiency: 0.9,
    },    
    {      
      spell: SPELLS.DEATH_FROM_ABOVE_TALENT, //Without 2pT20
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      //Real cooldown is 20 seconds. But this sohuld be used 
      getCooldown: (haste, combatant) => (30 - (combatant.hasBuff(SPELLS.SUB_ROGUE_T20_2SET_BONUS.id) ? 5 : 0)), 
      isActive: combatant => combatant.hasTalent(SPELLS.DEATH_FROM_ABOVE_TALENT.id),
      //recommendedCastEffitiency should be lower if we used real cooldown 
      recommendedCastEfficiency: 0.95,
      extraSuggestion: "Should be used with every Symbols of Death", 
    },

    //Non-CDs    
    {
      spell: SPELLS.NIGHTBLADE,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
    },    
    {
      spell: SPELLS.EVISCERATE,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
    },    
    {
      spell: SPELLS.BACKSTAB,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      isActive: combatant => !combatant.hasTalent(SPELLS.GLOOMBLADE_TALENT.id),
      getCooldown: haste => null,
    },       
    {
      spell: SPELLS.GLOOMBLADE_TALENT,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      isActive: combatant => combatant.hasTalent(SPELLS.GLOOMBLADE_TALENT.id),
      getCooldown: haste => null,
    }, 
    {
      spell: SPELLS.SHADOWSTRIKE,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
    }, 
    {
      spell: SPELLS.SHURIKEN_STORM,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
    },
    {
      spell: SPELLS.SHURIKEN_TOSS,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
    },    
    {
      spell: SPELLS.MARKED_FOR_DEATH_TALENT,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      isActive: combatant => combatant.hasTalent(SPELLS.MARKED_FOR_DEATH_TALENT.id),
      getCooldown: haste => null,
    },
  ];
}

export default Abilities;
