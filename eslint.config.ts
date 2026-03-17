import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      'dist/',
      'node_modules/',
      'src-tauri/',
      'eslint.config.ts',
      'vite.config.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      react,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
    settings: {
      react: { version: '19.0' },
    },
  },
]
