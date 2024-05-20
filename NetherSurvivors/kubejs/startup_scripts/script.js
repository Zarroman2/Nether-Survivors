// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('zinc_sword').displayName('Zinc Sword').type('sword').tier('iron').modelJson('iron_sword.json').unstackable()
})
onEvent('item.registry', event => {
	event.create('zinc_axe').displayName('Zinc Axe').type('axe').tier('iron').modelJson('iron_axe.json').unstackable()
})
onEvent('item.registry', event => {
	event.create('zinc_pickaxe').displayName('Zinc Pickaxe').type('pickaxe').tier('iron').modelJson('iron_pickaxe.json').unstackable()
})
onEvent('item.registry', event => {
	event.create('zinc_shovel').displayName('Zinc Shovel').type('shovel').tier('iron').modelJson('iron_shovel.json').unstackable()
})
onEvent('item.registry', event => {
	event.create('zinc_hoe').displayName('Zinc Hoe').type('hoe').tier('iron').modelJson('iron_hoe.json').unstackable()
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('nether_andesite')
	.material('stone')
	.hardness('1.5')
	.displayName('Nether Andesite')
	.requiresTool(true)
	.harvestTool('pickaxe', 0)
})
onEvent('worldgen.add', event => {
	event.addOre(ore => {
		ore.block = 'kubejs:nether_andesite'
		ore.spawnsIn.blacklist = false
		ore.spawnsIn.values = [
			'minecraft:netherrack'
		]
		ore.biomes.blacklist = false
		ore.biomes.values = [
			'#nether'
		]
		ore.clusterMinSize = 20
		ore.clusterMaxSize = 134
		ore.minHeight = 0
		ore.maxHeight = 60
		ore.clusterCount = 2
		ore.squared = true
	})
})
onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('nether_zinc_ore')
	.material('stone')
	.hardness('3')
	.displayName('Nether Zinc Ore')
	.requiresTool(true)
	.harvestTool('pickaxe', 1)
})
onEvent('worldgen.add', event=> {
	event.addOre(ore => {
		ore.block = 'kubejs:nether_zinc_ore'
		ore.spawnsIn.blacklist = false
		ore.spawnsIn.values = [
			'minecraft:netherrack'
		]
		ore.biomes.blacklist = false
		ore.biomes.values = [
			'#nether'
		]
		ore.clusterMinSize = 0
		ore.clusterMaxSize = 14
		ore.minHeight = 40
		ore.maxHeight = 65
		ore.clusterCount = 4
		ore.squared = true
	})
})