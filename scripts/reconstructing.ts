import reconstructObject from "./objectReconstruct";

const SCOREBOARD_MEMBERS = [
		{
			label: "set",
			type: "method",
			detail: "(title, lines)",
			info: "Set the global sidebar scoreboard.",
		},
		{
			label: "setFor",
			type: "method",
			detail: "(playerId, title, lines)",
			info: "Set a per-player scoreboard.",
		},
		{
			label: "clear",
			type: "method",
			detail: "()",
			info: "Remove all scoreboards.",
		},
	],
	TEAMS_MEMBERS = [
		{
			label: "create",
			type: "method",
			detail: "(id, opts?)",
			info: "Create a team. opts: { name, color }.",
		},
		{
			label: "remove",
			type: "method",
			detail: "(id)",
			info: "Delete a team.",
		},
		{
			label: "add",
			type: "method",
			detail: "(playerId, teamId)",
			info: "Add a player to a team.",
		},
		{
			label: "removePlayer",
			type: "method",
			detail: "(playerId)",
			info: "Remove a player from their team.",
		},
		{
			label: "of",
			type: "method",
			detail: "(playerId)",
			info: "The team id a player is on, or null.",
		},
		{
			label: "players",
			type: "method",
			detail: "(teamId)",
			info: "Array of players on a team.",
		},
		{
			label: "list",
			type: "method",
			detail: "()",
			info: "All teams with their sizes.",
		},
	],
	COMMANDS_MEMBERS = [
		{
			label: "register",
			type: "method",
			detail: "(name, opts?, handler)",
			info: 'Register a /command. opts: { usage, hint, permission: "all"|"admin" }.',
			snippet: {
				lines: ['register("", (sender, args) => {', "  ", "})"],
				cursorLine: 0,
				cursorCol: 10,
			},
		},
		{
			label: "unregister",
			type: "method",
			detail: "(name)",
			info: "Remove a registered command.",
		},
	],
	STORAGE_MEMBERS = [
		{
			label: "get",
			type: "method",
			detail: "(key)",
			info: "Read a stored value.",
		},
		{
			label: "set",
			type: "method",
			detail: "(key, value)",
			info: "Persist a value (survives reloads).",
		},
		{
			label: "delete",
			type: "method",
			detail: "(key)",
			info: "Delete a stored key.",
		},
		{
			label: "keys",
			type: "method",
			detail: "()",
			info: "Array of all stored keys.",
		},
		{
			label: "clear",
			type: "method",
			detail: "()",
			info: "Clear the whole store.",
		},
	];

const lol = new Map([
	["Commands", COMMANDS_MEMBERS],
	["Storage", STORAGE_MEMBERS],
	["Teams", TEAMS_MEMBERS],
	["Scoreboard", SCOREBOARD_MEMBERS],
]);

for (const [name, ac] of lol.entries()) {
	reconstructObject(name, ac);
}
