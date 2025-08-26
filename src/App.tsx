import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export function App(): JSX.Element {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
			<div className="container py-16">
				<div className="mx-auto max-w-2xl">
					<Card>
						<CardHeader>
							<h1 className="text-2xl font-bold">React + Vite + Tailwind v4 Template</h1>
							<p className="mt-1 text-sm text-neutral-600">
								Router, React Query, ErrorBoundary, and a tiny UI kit.
							</p>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								<p className="text-neutral-700">
									Get started by visiting the setup page or try the sample button styles below.
								</p>
								<div className="flex items-center gap-3">
									<Link to="/setup">
										<Button>Open setup</Button>
									</Link>
									<Button variant="secondary">Secondary</Button>
								</div>
								<div className="text-xs text-neutral-500 ">
									Components used on this page: <code>Card</code>, <code>Button</code>.
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
