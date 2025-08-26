// eslint.config.js
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'

export default [
	{
		ignores: ['dist', 'node_modules', '*.config.js', '*.config.ts'],
	},
	js.configs.recommended,
	prettierConfig,
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'@typescript-eslint': tseslint,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			import: importPlugin,
		},
		languageOptions: {
			parser: tseslintParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
				project: './tsconfig.json',
			},
			globals: {
				JSX: 'readonly',
				React: 'readonly',
				document: 'readonly',
				window: 'readonly',
			},
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				node: {
					extensions: ['.ts', '.tsx', '.js', '.jsx'],
				},
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
			},
		},
		rules: {
			// TypeScript rules
			...tseslint.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-var-requires': 'error',

			// React rules
			...reactPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off', // Not needed with TypeScript
			'react/jsx-uses-react': 'off', // Not needed with React 17+
			'react/jsx-uses-vars': 'error',
			'react/jsx-key': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-undef': 'error',
			'react/no-unescaped-entities': 'off', // Too strict for quotes in text
			'react/no-unknown-property': 'error',

			// React Hooks rules
			...reactHooksPlugin.configs.recommended.rules,

			// Import rules - simplified to avoid resolver issues
			'import/no-unresolved': 'off', // Disable due to resolver issues
			'import/no-duplicates': 'off', // Disable due to resolver issues
			'import/order': 'off', // Disable due to resolver issues

			// General rules
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-alert': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',
		},
	},
]
