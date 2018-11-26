module.exports = api => {
	api.cache.using(() => process.env.NODE_ENV);

	return api.env('test')
		? {
				presets: ['babel-preset-react-union'],
		  }
		: {
				presets: ['babel-preset-react-union'],
				plugins: [
					[
						'babel-plugin-ramda',
						{
							useES: true,
						},
					],
				],
		  };
};
