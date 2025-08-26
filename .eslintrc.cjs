/* eslint-env node */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	settings: {
		react: { version: 'detect' },
		'import/resolver': {
			typescript: true,
			node: true,
			alias: { map: [['@', './src']], extensions: ['.ts', '.tsx', '.js', '.jsx'] },
		},
	},
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/no-unresolved': 'error',
		'import/no-duplicates': 'error',
		'import/order': [
			'error',
			{
				'groups': [['builtin', 'external', 'internal'], ['parent', 'sibling', 'index']],
				'newlines-between': 'always',
				'alphabetize': { order: 'asc', caseInsensitive: true },
				'pathGroups': [
					{ pattern: '@/**', group: 'internal', position: 'after' },
				],
				'pathGroupsExcludedImportTypes': ['builtin'],
			},
		],
		"rules": {
        "at-rule-no-unknown": [
          true,
          {
            "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen"]
          }
        ]
      }
	},
	ignorePatterns: ['dist', 'node_modules'],
}
