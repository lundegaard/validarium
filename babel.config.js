module.exports = api => {
	const env = api.env();

	return {
		presets: ['babel-preset-react-union'],
		plugins: [
			[
				'babel-plugin-transform-imports',
				{
					ramda: {
						transform: `ramda/${env === 'es' ? 'es' : 'src'}/\${member}`,
						preventFullImport: true,
					},
					'ramda-extension': {
						transform: `ramda-extension/${env === 'es' ? 'es' : 'lib'}/\${member}`,
						preventFullImport: true,
					},
				},
			],
		],
	};
};
