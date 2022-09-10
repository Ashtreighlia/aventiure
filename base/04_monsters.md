![](./images/monsters_cover.webp)

# the monsters of prototype

## level

The level of a monster determines its health, number of actions per turn and the attack and defend levels. Meaning the higher the level of a monster, the more difficult it gets to defeat it.

## class

Unlike the class of a character the class of a monster defines its rank. You can think of it from minion (class 1) to boss (class 5). However, you can pick any monster class you want.

## health

The health of a monster is being calculated by its base health, level and monster class.

```
monster health = 50 + Xd10 (X is the level of a monster) + Y (Y is the class of a monster) * 25
```

## actions

The number of actions per turn for a monster is detriment by the level of it. A level 5 monster has 5 actions per turn.

## attack and defence

A monster's attack and defence is the same level as the level of the monster. With every attack the attack level decreases by one per turn, this resets in the next turn of the monster.

## damage

The damage a monster can deal is the sum of rolled Xd10, where the X stands for the level of the monster.