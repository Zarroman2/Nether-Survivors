// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload')

onEvent('recipes', event => {
	// Change recipes here
	event.shaped('kubejs:zinc_pickaxe', [
		'AAA',
		' B ',
		' B '
	], {
		A: 'create:zinc_ingot',
		B: 'minecraft:stick'
	})
	event.shaped('kubejs:zinc_axe', [
		'AA ',
		'AB ',
		' B '
	], {
		A: 'create:zinc_ingot',
		B: 'minecraft:stick'
	})
	event.shaped('kubejs:zinc_sword', [
		' A ',
		' A ',
		' B '
	], {
		A: 'create:zinc_ingot',
		B: 'minecraft:stick'
	})
	event.shaped('kubejs:zinc_hoe', [
		'AA ',
		' B ',
		' B '
	], {
		A: 'create:zinc_ingot',
		B: 'minecraft:stick'
	})
	event.shaped('kubejs:zinc_shovel', [
		' A ',
		' B ',
		' B '
	], {
		A: 'create:zinc_ingot',
		B: 'minecraft:stick'
	})
	event.shaped('8x tconstruct:grout', [
		'ABB',
		'BBC',
		'CCC'
	], {
		A: 'minecraft:soul_soil',
		B: 'minecraft:soul_sand',
		C: 'minecraft:gravel'
	})
	event.shaped('create:andesite_alloy',[
		'AB ',
		'BA ',
		'   '
	], {
		A: 'minecraft:iron_nugget',
		B: 'kubejs:nether_andesite'
	})
	event.shaped('create:andesite_alloy',[
		'AB ',
		'BA ',
		'   '
	], {
		A: 'create:zinc_nugget',
		B: 'kubejs:nether_andesite'
	})
	event.shaped('create:millstone', [
		' A ',
		'BCB',
		' D '
	], {
		A: '#minecraft:planks',
		B: 'create:andesite_alloy',
		C: 'create:cogwheel',
		D: 'minecraft:blackstone'
	})
	event.shaped('create:millstone', [
		' A ',
		'BCB',
		' D '
	], {
		A: '#minecraft:planks',
		B: 'create:andesite_alloy',
		C: 'create:cogwheel',
		D: 'kubejs:nether_andesite'
	})
	event.smelting('create:zinc_ingot', 'kubejs:nether_zinc_ore')
	event.blasting('create:zinc_ingot', 'kubejs:nether_zinc_ore')
	event.recipes.createMixing('create:andesite_alloy',[
		Item.of('kubejs:nether_andesite'),
		Item.of('minecraft:iron_nugget')
	])
	event.recipes.createMixing('create:andesite_alloy',[
		Item.of('kubejs:nether_andesite'),
		Item.of('create:zinc_nugget')
	])
	event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
		' AAA ',
		'AABAA',
		'ABCBA',
		'AABAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		B: '#minecraft:planks',
		C: 'kubejs:nether_andesite'
	})
	event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
		' AAA ',
		'AABAA',
		'ABCBA',
		'AABAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		B: '#minecraft:planks',
		C: 'minecraft:blackstone'
	})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})