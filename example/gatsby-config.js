module.exports = {
	siteMetadata: {
		title: `Example @w3f/gatsby-theme-w3f site`,
		title_meta: `An example site using @w3f/gatsby-theme-w3f theme.`,
		description: `An example w3f gatsby website, using the @w3f/gatsby-theme-w3f theme`,
		image_og: '',
		siteUrl: 'https://example.com',
		author: 'w3f',
		email: 'test@example.com',
		reddit: 'https://www.reddit.com',
		twitter: 'https://twitter.com',
		youtube: 'https://www.youtube.com',
		discord: 'https://discord.gg',
		linkedIn: 'https://www.linkedin.com',
		github: 'https://github.com',
	},
	plugins: [
		{
			resolve: `@w3f/gatsby-theme-w3f`,
			options: {
				i18nLanguages: ['en', 'fr']
			}
		},
	],
};
