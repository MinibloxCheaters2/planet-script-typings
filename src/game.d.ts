declare const game: Game;

interface Commands {
	/** Register a /command. opts: { usage, hint, permission: "all"|"admin" }. */
	register(
		name: string,
		opts?: { usage?: string; hint?: string; permission?: "all" | "admin" },
		handler: (sender: Player, args: string[]) => void,
	): void;

	/** Remove a registered command. */
	unregister(name: string): void;
}
interface Storage {
	/** Read a stored value. */
	get(key: string): unknown | null;

	/** Persist a value (survives reloads). */
	set(key: string, value: unknown): void;

	/** Delete a stored key. */
	delete(key: string): void;

	/** Array of all stored keys. */
	keys(): string[];

	/** Clear the whole store. */
	clear(): void;
}
type Color =
	| "red"
	| "blue"
	| "green"
	| "yellow"
	| "aqua"
	| "white"
	| "pink"
	| "gray"
	| "orange"
	| "purple"
	| "lime"
	| "cyan";
interface Team {
	/** A unique ID for this team. */
	id: string;
	/** What is the name of this team? (defaults to the ID if not specified) */
	name: string;
	/** What color is this team? */
	color: Color;
	/** How many players are in this team? */
	size: number;
}
interface Teams {
	/** Create a team. opts: { name, color }. */
	create(id: string, opts?: { name: string; color: Color }): void;

	/** Delete a team. */
	remove(id: string): void;

	/** Add a player to a team. */
	add(playerId: number, teamId: string): void;

	/** Remove a player from their team. */
	removePlayer(playerId: number): void;

	/** The team id a player is on, or null. */
	of(playerId: number): number | null;

	/** Array of players on a team. */
	players(teamId: string): Player[];

	/** All teams with their sizes. */
	list(): Team[];
}

interface Scoreboard {
	/** Set the global sidebar scoreboard. */
	set(title: string, lines: string[]);

	/** Set a per-player scoreboard. */
	setFor(playerId: number, title: string, lines: string[]);

	/** Remove all scoreboards. */
	clear(): void;
}

interface Event {}
interface CancellableEvent extends Event {
	/** Cancels this event. */
	cancel(): void;
}
interface Vector3 {
	x: number;
	y: number;
	z: number;
}

interface ItemStack {
	item: string;
	count: number;
}

interface Entity {}

interface Event {}

interface CancellableEvent extends Event {
	cancel(): void;
	cancelled: boolean;
}

// thank you CatGPT for not making me have to make interfaces for every single event

interface EventPlayerJoin extends Event {
	readonly player: Player;
	joinMessage: string;
}

interface EventPlayerQuit extends Event {
	readonly player: Player;
	quitMessage: string;
}

interface EventPlayerChat extends CancellableEvent {
	readonly player: Player;
	message: string;
}

interface EventPlayerDeath extends Event {
	readonly player: Player;
	deathMessage: string;
	keepInventory: boolean;
}

interface EventPlayerRespawn extends Event {
	readonly player: Player;
	readonly location: Vector3;
	spawn: Vector3;
}

interface EventPlayerInteract extends CancellableEvent {
	readonly player: Player;
	readonly action: string;
	readonly item: ItemStack;
	readonly pos: Vector3;
	readonly block: string;
}

interface EventPlayerInteractEntity extends CancellableEvent {
	readonly player: Player;
	readonly target: Entity;
}

interface EventPlayerDropItem extends CancellableEvent {
	readonly player: Player;
	readonly item: ItemStack;
}

interface EventPlayerItemConsume extends CancellableEvent {
	readonly player: Player;
	readonly item: ItemStack;
}

interface EventPlayerToggleCrouch extends CancellableEvent {
	readonly player: Player;
	readonly isSneaking: boolean;
}

interface EventPlayerHit extends CancellableEvent {
	readonly player: Player;
	readonly target: Entity;
	readonly hitPos: Vector3;
}

interface EventPlayerMove extends CancellableEvent {
	readonly player: Player;
	readonly from: Vector3;
	readonly to: Vector3;
}

interface EventBlockPlace extends CancellableEvent {
	readonly player: Player;
	readonly pos: Vector3;
	readonly block: string;
	readonly item: ItemStack;
}

interface EventBlockBreak extends CancellableEvent {
	readonly player: Player;
	readonly pos: Vector3;
	readonly block: string;
	dropItems: boolean;
}

interface EventBlockActivation extends CancellableEvent {
	readonly player: Player;
	readonly pos: Vector3;
	readonly block: string;
}

interface EventSignChange extends CancellableEvent {
	readonly player: Player;
	readonly pos: Vector3;
}

interface EventEntityDamage extends CancellableEvent {
	readonly entity: Entity;
	readonly cause: string;
	damage: number;
}

interface EventEntityDamageByEntity extends CancellableEvent {
	readonly entity: Entity;
	readonly attacker: Player | Entity;
	readonly cause: string;
	damage: number;
}

interface EventEntityDeath extends Event {
	readonly entity: Entity;
}

interface EventEntityExplode extends CancellableEvent {
	readonly entity: Entity;
	readonly pos: Vector3;
	readonly blockCount: number;
}

interface EventEntityPickupItem extends CancellableEvent {
	readonly player: Player;
	readonly item: ItemStack;
}

interface EventEntityShootBow extends CancellableEvent {
	readonly player: Player;
}

interface EventEntityThrowable extends CancellableEvent {
	readonly entity: Entity;
	velocity: Vector3;
	readonly inaccuracy: number;
}

interface EventProjectileHit extends CancellableEvent {
	readonly projectile: Entity;
	readonly hitEntity: Entity | null;
	readonly pos: Vector3;
	readonly block: string;
}

interface EventInventoryClick extends CancellableEvent {
	readonly player: Player;
	readonly slot: number;
	readonly click: string;
	readonly action: string;
	readonly windowType: string;
}

interface EventPlayerCloseWindow extends Event {
	readonly player: Player;
}

interface EventTick extends Event {}

interface EventScriptLoad extends Event {}

interface EventWorldSave extends Event {}

interface GameEvents {
	/** A player joins. Fields: e.player, e.joinMessage (writable). **/
	playerJoin: EventPlayerJoin;

	/** A player leaves. Fields: e.player, e.quitMessage (writable). **/
	playerQuit: EventPlayerQuit;

	/** Cancellable. A player sends chat. Fields: e.player, e.message (writable). **/
	playerChat: EventPlayerChat;

	/** A player dies. Fields: e.player, e.deathMessage (writable), e.keepInventory (writable). **/
	playerDeath: EventPlayerDeath;

	/** A player respawns. Fields: e.player, e.location, e.spawn (writable: {x,y,z}). **/
	playerRespawn: EventPlayerRespawn;

	/** Cancellable. Right/left click. Fields: e.player, e.action, e.item, e.pos, e.block. **/
	playerInteract: EventPlayerInteract;

	/** Cancellable. Click an entity. Fields: e.player, e.target. **/
	playerInteractEntity: EventPlayerInteractEntity;

	/** Cancellable. Drop an item. Fields: e.player, e.item. **/
	playerDropItem: EventPlayerDropItem;

	/** Cancellable. Eat/drink an item. Fields: e.player, e.item. **/
	playerItemConsume: EventPlayerItemConsume;

	/** Cancellable. Sneak toggled. Fields: e.player, e.isSneaking. **/
	playerToggleCrouch: EventPlayerToggleCrouch;

	/** Cancellable. A player hits an entity. Fields: e.player, e.target, e.hitPos. **/
	playerHit: EventPlayerHit;

	/** Cancellable, throttled. Fields: e.player, e.from, e.to. **/
	playerMove: EventPlayerMove;

	/** Cancellable. A block is placed. Fields: e.player, e.pos, e.block, e.item. **/
	blockPlace: EventBlockPlace;

	/** Cancellable. A block is broken. Fields: e.player, e.pos, e.block, e.dropItems (writable). **/
	blockBreak: EventBlockBreak;

	/** Cancellable. A block is activated (door, button…). Fields: e.player, e.pos, e.block. **/
	blockActivation: EventBlockActivation;

	/** Cancellable. A sign's text changes. Fields: e.player, e.pos. **/
	signChange: EventSignChange;

	/** Cancellable. Any damage. Fields: e.entity, e.cause, e.damage (writable). **/
	entityDamage: EventEntityDamage;

	/** Cancellable. Damage from an entity. Fields: e.entity, e.attacker, e.cause, e.damage (writable). **/
	entityDamageByEntity: EventEntityDamageByEntity;

	/** An entity dies. Fields: e.entity. **/
	entityDeath: EventEntityDeath;

	/** Cancellable. An explosion occurs. Fields: e.entity, e.pos, e.blockCount. **/
	entityExplode: EventEntityExplode;

	/** Cancellable. A player picks up an item. Fields: e.player, e.item. **/
	entityPickupItem: EventEntityPickupItem;

	/** Cancellable. A bow is fired. Fields: e.player. **/
	entityShootBow: EventEntityShootBow;

	/** Cancellable. A throwable is thrown. Fields: e.entity, e.velocity (writable), e.inaccuracy. **/
	entityThrowable: EventEntityThrowable;

	/** Cancellable. A projectile lands. Fields: e.projectile, e.hitEntity, e.pos, e.block. **/
	projectileHit: EventProjectileHit;

	/** Cancellable. A slot is clicked. Fields: e.player, e.slot, e.click, e.action, e.windowType. **/
	inventoryClick: EventInventoryClick;

	/** A player closes a window. Fields: e.player. **/
	playerCloseWindow: EventPlayerCloseWindow;

	/** Runs every server tick (20/s). Subscribe sparingly — keep handlers cheap. **/
	tick: EventTick;

	/** Runs once when scripts load or reload. **/
	scriptLoad: EventScriptLoad;

	/** Runs when the world is saved. **/
	worldSave: EventWorldSave;
}

interface World {
	/** Returns the block name at a position. */
	getBlock(x: number, y: number, z: number);

	/** Set the block at a position. */
	setBlock(x: number, y: number, z: number, block: string);

	/** Fill a cuboid with a block. */
	fill(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		block: string,
	);

	/** Drop an item entity. */
	spawnItem(x: number, y: number, z: number, item, count?: number);

	/** Spawn a mob. */
	spawnMob(x: number, y: number, z: number, type: string);

	/** Create an explosion. */
	explode(
		x: number,
		y: number,
		z: number,
		power: number,
		breakBlocks?: boolean,
	);

	/** Play a positional sound. */
	playSound(
		sound,
		x: number,
		y: number,
		z: number,
		volume?: number,
		pitch?: number,
	);
}

/** The root scripting API. */
interface Game {
	on<K extends keyof GameEvents>(
		event: K,
		handler: (e: GameEvents[K]) => void,
	): void;

	/** Get a player by their ID (`number`) or name (`string`) */
	getPlayer(idOrName: string | number): Player | null;

	players(): Player[];

	world: World;
	scoreboard: Scoreboard;
	teams: Teams;
	commands: Commands;
	storage: Storage;

	time: number;
	tick: number;
	state: string;
}

interface Player {
	/** Move the player. */
	teleport(x: number, y: number, z: number);

	/** Send a chat message to this player. */
	sendMessage(msg: string);

	/** Show a title to this player. */
	sendTitle(msg: string, durationMs?: number);

	/** Set the player's game mode. */
	setGameMode(mode: string);

	/** Set the player's health. */
	setHealth(health: number);

	/** Restore to full health. */
	heal();

	/** Kill the player. */
	kill();

	/** Force a respawn. */
	respawn();

	/** Give an item. */
	give(item: string, count?: number);

	/** Empty the inventory. */
	clearInventory();

	/** How many of an item the player holds. */
	countItem(item: string);

	/** Remove items; returns the amount removed. */
	removeItem(item: string, count?: number);

	/** Apply a potion effect. */
	applyEffect(effect: string, durationTicks: number, amplifier?: number);

	/** Play a sound to this player. */
	playSound(sound: string, volume?: number, pitch?: number);

	/** Read this player's per-player data object. */
	getData(): object;

	/** Replace this player's per-player data object. */
	setData(data: object);

	/** Entity id. */
	readonly id: number;

	/** Username. */
	readonly name: string;

	/** Account uuid. */
	readonly uuid: string;

	/** Current position (and rotation, but Vector forgor) */
	pos: { x: number; y: number; z: number; yaw: number; pitch: number };

	/** Health (gettable / settable). */
	health: number;

	/** Current game mode (read-only). */
	readonly gameMode: string;

	/** Whether the player is still online. */
	readonly isOnline: boolean;
}
