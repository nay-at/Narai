import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import UserLayout from "./components/layout/UserLayout";
import AdminLayout from "./components/layout/AdminLayout"; */
import UserRoutes from './routes/UserRoutes'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Partie utilisateur */}
				<Route
					path='*'
					element={<UserRoutes />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
