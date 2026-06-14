const EVENTS = [
	{
		name: "playerJoin",
		info: "A player joins. Fields: e.player, e.joinMessage (writable).",
	},
	{
		name: "playerQuit",
		info: "A player leaves. Fields: e.player, e.quitMessage (writable).",
	},
	{
		name: "playerChat",
		info: "Cancellable. A player sends chat. Fields: e.player, e.message (writable).",
	},
	{
		name: "playerDeath",
		info: "A player dies. Fields: e.player, e.deathMessage (writable), e.keepInventory (writable).",
	},
	{
		name: "playerRespawn",
		info: "A player respawns. Fields: e.player, e.location, e.spawn (writable: {x,y,z}).",
	},
	{
		name: "playerInteract",
		info: "Cancellable. Right/left click. Fields: e.player, e.action, e.item, e.pos, e.block.",
	},
	{
		name: "playerInteractEntity",
		info: "Cancellable. Click an entity. Fields: e.player, e.target.",
	},
	{
		name: "playerDropItem",
		info: "Cancellable. Drop an item. Fields: e.player, e.item.",
	},
	{
		name: "playerItemConsume",
		info: "Cancellable. Eat/drink an item. Fields: e.player, e.item.",
	},
	{
		name: "playerToggleCrouch",
		info: "Cancellable. Sneak toggled. Fields: e.player, e.isSneaking.",
	},
	{
		name: "playerHit",
		info: "Cancellable. A player hits an entity. Fields: e.player, e.target, e.hitPos.",
	},
	{
		name: "playerMove",
		info: "Cancellable, throttled. Fields: e.player, e.from, e.to.",
	},
	{
		name: "blockPlace",
		info: "Cancellable. A block is placed. Fields: e.player, e.pos, e.block, e.item.",
	},
	{
		name: "blockBreak",
		info: "Cancellable. A block is broken. Fields: e.player, e.pos, e.block, e.dropItems (writable).",
	},
	{
		name: "blockActivation",
		info: "Cancellable. A block is activated (door, button…). Fields: e.player, e.pos, e.block.",
	},
	{
		name: "signChange",
		info: "Cancellable. A sign's text changes. Fields: e.player, e.pos.",
	},
	{
		name: "entityDamage",
		info: "Cancellable. Any damage. Fields: e.entity, e.cause, e.damage (writable).",
	},
	{
		name: "entityDamageByEntity",
		info: "Cancellable. Damage from an entity. Fields: e.entity, e.attacker, e.cause, e.damage (writable).",
	},
	{
		name: "entityDeath",
		info: "An entity dies. Fields: e.entity.",
	},
	{
		name: "entityExplode",
		info: "Cancellable. An explosion occurs. Fields: e.entity, e.pos, e.blockCount.",
	},
	{
		name: "entityPickupItem",
		info: "Cancellable. A player picks up an item. Fields: e.player, e.item.",
	},
	{
		name: "entityShootBow",
		info: "Cancellable. A bow is fired. Fields: e.player.",
	},
	{
		name: "entityThrowable",
		info: "Cancellable. A throwable is thrown. Fields: e.entity, e.velocity (writable), e.inaccuracy.",
	},
	{
		name: "projectileHit",
		info: "Cancellable. A projectile lands. Fields: e.projectile, e.hitEntity, e.pos, e.block.",
	},
	{
		name: "inventoryClick",
		info: "Cancellable. A slot is clicked. Fields: e.player, e.slot, e.click, e.action, e.windowType.",
	},
	{
		name: "playerCloseWindow",
		info: "A player closes a window. Fields: e.player.",
	},
	{
		name: "tick",
		info: "Runs every server tick (20/s). Subscribe sparingly — keep handlers cheap.",
	},
	{
		name: "scriptLoad",
		info: "Runs once when scripts load or reload.",
	},
	{
		name: "worldSave",
		info: "Runs when the world is saved.",
	},
];

function uppercaseFirstLetter(of: string): string {
	const arr = of.split("");
	arr[0]! = arr[0]!.toUpperCase();
	return arr.join("");
}

console.log("interface GameEvents {");
for (const event of EVENTS) {
	const eventType = `Event${uppercaseFirstLetter(event.name)}`;
	console.log(`
\t/** ${event.info} */
\t${event.name}: ${eventType};`);
}
console.log("}");
