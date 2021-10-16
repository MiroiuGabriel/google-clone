import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function PaginationButtons() {
	const router = useRouter();

	const startIndex = Number(router.query.start) || 1;
	return (
		<div className="flex justify-between max-w-lg text-blue-700 mb-10">
			{startIndex > 1 && (
				<Link
					href={`/search?term=${router.query.term}&start=${
						startIndex - 1
					}`}
				>
					<div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
						<ChevronLeftIcon className="h-5" />
						<p>Previous</p>
					</div>
				</Link>
			)}

			<Link
				href={`/search?term=${router.query.term}&start=${
					startIndex + 1
				}`}
			>
				<div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
					<ChevronRightIcon className="h-5" />
					<p>Next</p>
				</div>
			</Link>
		</div>
	);
}

export default PaginationButtons;
