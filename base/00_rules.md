![prototype_cover image.jpg](./images/prototype_cover.webp)

# the rules of prototype

## skills

Unlike most rulesets, prototype does not use predefined skills. The main focus is on developing your character over time. Just like in real life you can do anything - you might suck at it, but at least you can give it a try.

The first skill owned by everyone, is **do a thing: 1** - meaning you can do anything as a level 1 action.

When someone wants to do something, they and the game master (GM) roll their d10s and d10.0s dice (for a total of 1-100) to decide whether the player was successful. For example, if you want to open a LVL 1 lock with a LVL 1 lock picking skill, both roll once. However, if higher levels are involved, both roll as many times as they have levels in their "skill". The highest single roll of both parties counts. If the player wins, he manages to do whatever he wanted to do. However, if the GM wins, the player screws up his action. If there is a tie on the highest roll, the player wins.

If a player throws a double, he is granted a level up in whatever he was just trying to do. However he needs to throw as many doubles as he made rolls, meaning, that for a level 3 skill the player has to roll 3 doubles in a row while performing his action to level up his skill.

### tools

A player can find and use tools to get an edge over the GM. They increase the likely hood of them succeeding. For more information look up [armour, wands, weapons and tools of prototype](01_armour_wands_weapons_tools.md).

### examples

| used skill          | action    | action level | player's roll | tool                           | GM's roll  | result  | notes                                                        |
|:-------------------:|:---------:|:------------:|:-------------:|:------------------------------:|:----------:|:-------:|:------------------------------------------------------------:|
| **do a thing: 1**   | open lock | lock lvl 1   | **34**        | -                              | **50**     | fail    |                                                              |
| **do a thing: 1**   | open lock | lock lvl 1   | **67**        | -                              | **50**     | success |                                                              |
| **do a thing: 1**   | open lock | lock lvl 1   | **48**        | normal lock pick: +5 -> **53** | **50**     | success | player used a lockpick                                       |
| **do a thing: 1**   | open lock | lock lvl 1   | **50**        | -                              | **50**     | success | stalemate counts as success for player                       |
| **do a thing: 1**   | open lock | lock lvl 1   | **100**       | -                              | **50**     | success | player learns skill **lock picking: 2** (all dice at max)    |
| **do a thing: 1**   | open lock | lock lvl 2   | **50**        | -                              | 42, **60** | fail    | player's dice roll (50) was lower than GM's highest die (60) |
| **lock picking: 2** | open lock | lock lvl 1   | 44, **70**    | -                              | **50**     | success | player learns no skill (only one roll is a double)           |
| **lock picking: 2** | open lock | lock lvl 2   | 22, **66**    | -                              | **62**, 43 | success | player learns skill **lock picking: 3** (all doubles)        |

---

## combat

### initiative

The order in combat is determent by a d10 throw. If the GM and a player happen to roll the same value, the player goes first. If multiple players rolled the same value, the players decide their order.

### actions

Every player has 2 actions and 1 movement action in combat. They can use their actions however they want, but they cannot do the same action and skill level twice per turn. Attacking, casting a spell, using a skill or even using their normal actions as movement actions counts towards their overall used actions that turn. However, you can only use a particular skill level once per round, which means that any subsequent actions must be made with the next lower skill level. This also applies to other skills, attack skills or spell skills in this round, meaning that you should start with the highest skill level and work your way down from there.

### movement

Every player can move 2 squares per used movement action. As a measurement for distance you may choose any measurement system that fits your bill (should be around 1 meters, 3 feet or 60 barleycorn for length of one square side).

### attack

Everyone can **attack a thing: 1**. Just like with the normal skills, you can attack anything you want, however you want, but don't expect to impress a dragon by hitting it with a rock. Here, as with a skill check, the attacker rolls their d10s and d10.0s (for a total of 1-100) according to their skill level for their attack and the defender rolls with their defence skill against the attackers roll. If the attacker wins, the target takes the damage described by their weapon. Otherwise the attacker has missed their target. As with the skills before, you increase your skill level by rolling doubles.

### defend

When defending, each player initially resorts to **defend a thing: 1**. This is the player's defence against an attack as described earlier in the paragraph attack. The ability improves by rolling doubles for the type of armour used.  

#### weapons and armour

By using better weapons the attacker can add modifiers to their attack roll. Same goes for the defender by using better armour.

For more information look up [armour, wands, weapons and tools of prototype](01_armour_wands_weapons_tools.md).

#### player attack examples

| player's skill        | player's roll | monster level | GM's roll      | result  | used weapon   | notes                                                                                                                                     |
|:---------------------:|:-------------:|:-------------:|:--------------:|:-------:|:-------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| **attack a thing: 1** | **42**        | 1             | **50**         | fail    | normal dagger | player misses                                                                                                                             |
| **attack a thing: 1** | **63**        | 1             | **50**         | success | normal dagger | player does 1d10 damage with his dagger                                                                                                   |
| **attack a thing: 1** | **77**        | 1             | **50**         | success | normal sword  | player learns new attack skill **sword attack: 2** as they rolled a double (77) using a sword <br/>player does 2d10 damage with his sword |
| **sword attack: 2**   | 37, **76**    | 1             | **50**         | success | normal sword  | player does 2d10 damage with his sword                                                                                                    |
| **sword attack: 2**   | 43, **85**    | 2             | 50, **81**     | success | normal sword  | player does 2d10 damage with his sword                                                                                                    |
| **sword attack: 2**   | 23, **65**    | 3             | 17, 50, **72** | success | normal sword  | player does 2d10 damage with his sword                                                                                                    |

#### player defend examples

| monster level | GM's roll  | player's skill | player's roll  | armour  | result  | notes                                                                                                                                        |
|:-------------:|:----------:|:--------------:|:--------------:|:-------:|:-------:|:--------------------------------------------------------------------------------------------------------------------------------------------:|
| 1             | **50**     | 1              | **62**         | leather | fail    | monster misses                                                                                                                               |
| 1             | **82**     | 1              | 33, **56**     | leather | success | player learns new defend skill **leather armour: 2** as they rolled a double (33) using leather armour <br> monster does 2d10 damage (lvl 2) |
| 2             | 45, **73** | 3              | 24, **95**, 30 | leather | fail    | monster misses                                                                                                                               |

---

## spells and rituals

As in the previous chapters, spells also have skill levels. Each player knows a number of spells based on their class and race. They can cast all of these as level 1 spells. Every player has a certain amount of mana points according to their picked class and race. Casting a spell uses up one mana point, if you are out of mana points you cannot cast any more spells. Mana points can be refreshed by taking a rest or a mana potion.

There are three different types of spells - attack, support and utility. Utility and support spells are cast against the worst d10 and d10.0 (for 1-100) roll of the GM with the same amount of dice as the player has skill levels. Attack spells, on the other hand, are always rolled against the defence level of the attacked, the highest single roll counts. In the event of a tie, the attacked wins. The damage is determined by the wand used and the properties of the spell.

Unlike spells, rituals are not directl magical influences emanating from a being, but are rather created through concentration. Therefore, rituals do not require checks, but they can only be prepared during a rest.

For more information look up [rituals and spells of prototype](02_rituals_spells.md).

### utility spell examples

| player's spell | player's roll  | GM's roll      | fail/success | notes                                                              |
|:--------------:|:--------------:|:--------------:|:------------:|:------------------------------------------------------------------:|
| **light: 1**   | **47**         | **50**         | fail         |                                                                    |
| **light: 1**   | **22**         | **50**         | fail         | player learns new spell skill **light: 2** as they rolled a double |
| **light: 3**   | 25, **76**, 43 | 50, **27**, 86 | success      |                                                                    |

### support spell examples

| player's spell | player's roll | GM's roll  | fail/success | notes                                                                |
|:--------------:|:-------------:|:----------:|:------------:|:--------------------------------------------------------------------:|
| **heal: 1**    | **24**        | **50**     | fail         |                                                                      |
| **heal: 2**    | **64**, 15    | **58**, 84 | success      | heals target for as many hit points as determined by their modifiers |

### attack spell examples

| player's spell        | player's roll | monster level | GM's roll                      | result              | used wand   | notes                                                                         |
|:---------------------:|:-------------:|:-------------:|:------------------------------:|:-------------------:|:-----------:|:-----------------------------------------------------------------------------:|
| **fire ball: 1**      | **42**        | 1             | **50**                         | fail                |             |                                                                               |
| **lightning bolt: 1** | **45**        | 1             | **50**                         | success             | amber staff | hits a enemy for 2d10 + 1d10 from spell                                       |
| **fire ball: 2**      | 20, **55**    | 1; 1; 3       | **35**; **75**; 17, **86**, 34 | success; fail; fail |             | fire ball has an area of effect -> every affected monster has to counter roll |

---

## characters

Like any other TTRPG, prototype also relies heavily on its characters. To simplify the creation of a [character sheet](../extensions/assets/character_sheet/character_sheet.txt) for the players, one is already enclosed, what a service!

### health

Every character starts out with a base health of 100hp. Health can be replenished by healing as a skill or as a spell. Resting heals you to the maximum, but you have to consume a ration while doing it.

### classes and races

When creating a character, both the class and race are important for their traits. Prototype tries to keep the system relatively simple so as not to waste too much time (subsequent characters should therefore be relatively easy to create.. dying is part of the game ^^).

For more information look up [classes and races of prototype](03_classes_races.md).

### healing

Healing can be achieved in three ways. Either by casting a heal spell, using a potion of healing (heals a quarter of your maximum HP) or aiding your wounds with an first aid kit (for 1d10 if the skill check was successful). 

### level up

Levelling is mostly determined by the GM. As a rule of thumb you level up every 6 skills you learned as a character. A level up grants you full health and mana points and can be regarded as a rest with consumed ration. Additionally you gain 1d10 HP on your maximum health, one more spell slot.

Every 2 character level ups you learn one new spell.

### rest

You can take a rest at any time, but you should seek a safe place first to set up camp. A rest takes around 4 hours and refills all your mana points. If you have consumed a ration your health will be completely restored, this is optional, but highly recommended.

### death

Dying is always such a thing. No one wants to, but someone has to. In prototype, death is handled relatively simply. If you are at 0HP, you are unconscious. In prototype you only die if an enemy attacks and hits you while you are unconscious, the damage doesn't matter. So technically your teammates can keep you unconscious after a team fight, so you better be useful to them. You revive teammates by healing them.

---

## monsters

Since prototype is a very open game system, the monsters you use in your session are as freely inventable as the rest of the game. So go nuts! In the following, we will roughly go into the values such as health and actions per battle as well as attacks, damage and defence of monsters.

For more information look up [monsters of prototype](04_monsters.md).