StartupEvents.registry("block", (event) => {
    event.create("gtceu:marble") 
    .material("stone")
    .hardness(1.2)
    .resistance(2.0)
    .requiresTool(true) 
    .tagBlock("mineable/pickaxe")
    .tagBlock('minecraft:needs_iron_tool')

    event.create("gtceu:marble_cobblestone") 
    .material("stone")
    .hardness(1.2)
    .resistance(2.0)
    .requiresTool(true) 
    .tagBlock("mineable/pickaxe")
    .tagBlock('minecraft:needs_iron_tool')
})