import React from 'react'
import type { ExampleItem } from '../types/example'

export function ExampleCard({ id, title, description }: ExampleItem): JSX.Element {
	return (
		<div className="rounded border border-gray-200 p-4">
			<div className="text-sm text-gray-500">#{id}</div>
			<div className="text-lg font-semibold">{title}</div>
			{description && <p className="text-gray-600">{description}</p>}
		</div>
	)
}
