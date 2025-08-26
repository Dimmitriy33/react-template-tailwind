import React from 'react'

export default function SetupPage(): JSX.Element {
	return (
		<div className="container py-10 space-y-6">
			<h2 className="text-2xl font-bold">Project Setup</h2>

			<section className="space-y-2">
				<h3 className="text-lg font-semibold">Stack</h3>
				<ul className="list-disc pl-5 text-gray-700">
					<li>Vite + React + TypeScript</li>
					<li>Tailwind CSS (v4, via <code>@tailwindcss/postcss</code>)</li>
					<li>React Router</li>
					<li>@tanstack/react-query</li>
					<li>ESLint + Prettier</li>
					<li>Vitest + Testing Library</li>
					<li>Husky + lint-staged</li>
				</ul>
			</section>

			<section className="space-y-2">
				<h3 className="text-lg font-semibold">Scripts</h3>
				<pre className="whitespace-pre-wrap rounded border border-gray-200 bg-white p-3 text-sm text-gray-800">
                {`
                    npm run dev      # start dev server
                    npm run build    # type-check and build
                    npm run preview  # preview production build
                    npm run lint     # run ESLint
                    npm run format   # run Prettier
                    npm run test     # run unit tests
                `}
                </pre>
			</section>

			<section className="space-y-2">
				<h3 className="text-lg font-semibold">Folders</h3>
				<ul className="list-disc pl-5 text-gray-700">
					<li><code>src/</code> – application code</li>
					<li><code>src/pages/</code> – page components (route targets)</li>
					<li><code>src/components/</code> – reusable UI/components</li>
					<li><code>src/types/</code> – shared TypeScript types</li>
				</ul>
			</section>

			<section className="space-y-2">
				<h3 className="text-lg font-semibold">Styling</h3>
				<p className="text-gray-700">Tailwind is imported in <code>src/index.css</code> via <code>@import "tailwindcss"</code>. Use utility classes directly in JSX.</p>
			</section>

			<section className="space-y-2">
				<h3 className="text-lg font-semibold">Git Hooks</h3>
				<p className="text-gray-700">Husky is enabled. Pre-commit runs <code>lint-staged</code> to format/lint changed files.</p>
			</section>
		</div>
	)
}
