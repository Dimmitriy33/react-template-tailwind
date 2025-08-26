import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Header } from '@/components/Header'
import './index.css'

const App = lazy(() => import('./App').then((m) => ({ default: m.App })))
const SetupPage = lazy(() => import('./pages/ExamplePage').then((m) => ({ default: m.default })))

// Create a layout component that includes the header
function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<Suspense fallback={<div className="container py-8">Loading…</div>}>{children}</Suspense>
		</>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<App />
			</Layout>
		),
	},
	{
		path: '/setup',
		element: (
			<Layout>
				<SetupPage />
			</Layout>
		),
	},
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary>
				<RouterProvider router={router} />
			</ErrorBoundary>
		</QueryClientProvider>
	</React.StrictMode>,
)
