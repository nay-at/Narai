/* import { useLessons } from "../../features/lessons/useLessons";
import { LessonCard } from "../../features/lessons/LessonCard";
 */
export default function Home() {
	return (
		<div className='p-6 max-w-4xl mx-auto'>
			<h1 className='text-3xl font-bold mb-6'>📚 Leçons disponibles</h1>

			{'test'.length === 0 ? (
				<p>Chargement des leçons...</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div key={index}>test - {index}</div>
					))}
				</div>
			)}
		</div>
	)
}
