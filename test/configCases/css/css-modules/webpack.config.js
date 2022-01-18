const webpack = require("../../../../");

/** @type {import("../../../../").Configuration[]} */
module.exports = [
	{
		target: "web",
		mode: "development",
		experiments: {
			css: true
		}
	},
	{
		target: "web",
		mode: "production",
		output: {
			uniqueName: "my-app"
		},
		experiments: {
			css: true
		},
		plugins: [
			new webpack.ids.DeterministicModuleIdsPlugin({
				maxLength: 3,
				failOnConflict: true,
				fixedLength: true,
				test: m => m.type.startsWith("css")
			})
		]
	}
];
