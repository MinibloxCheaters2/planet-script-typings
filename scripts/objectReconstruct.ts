export interface CodeMirrorTrash {
	type: "method" | "property";
	detail: string;
	label: string;
	info: string;
}
export default function reconstructObject(
	name: string,
	cmAutoComplete: readonly CodeMirrorTrash[],
) {
	console.log(`interface ${name} {`);

	for (const { detail, info, label, type } of cmAutoComplete) {
		switch (type) {
			case "method":
				console.log(`\t/** ${info} */
\t${label}${detail}
`); // detail includes the () when its a method so don't wrap it in parens
				break;
			case "property":
				console.log(`
\t/** ${info} */
\t${label}: ${detail}`);
				break;
		}
	}
	console.log("}");
}
