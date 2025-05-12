import { Route, Routes } from 'react-router-dom'
import Home from '../pages/public/Home'

export default function UserRoutes() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			{/* Ajoute ici plus tard la route des leçons */}
		</Routes>
	)
}
