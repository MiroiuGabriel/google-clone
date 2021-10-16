import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const queryTerm = router.query.term || '';

	const search = e => {
		e.preventDefault();

		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`search?term=${term}`);
	};

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="https://www.google.ro/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					height={40}
					width={120}
					className="cursor-pointer"
					onClick={() => router.push('/')}
				/>
				<form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 items-center flex-grow max-w-3xl">
					<input
						ref={searchInputRef}
						type="text"
						className="flex-grow w-full focus:outline-none"
						defaultValue={queryTerm}
					/>
					<XIcon
						className="h-7 cursor-pointer sm:mr-3 text-gray-500 transition duration-100 transform hover:scale-125 ease-out"
						onClick={() => (searchInputRef.current.value = '')}
					/>

					<MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
					<SearchIcon
						className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
						onClick={search}
					/>
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					url="https://media-exp1.licdn.com/dms/image/C5603AQFhu-ZUS9ZUfA/profile-displayphoto-shrink_200_200/0/1634060673040?e=1639612800&v=beta&t=vKZKOTpKkUZpvgwU_8iH9Pjvdtyd8xoRHYK0G5uNR1o"
					className="ml-auto"
				/>
			</div>
			<HeaderOptions />
		</header>
	);
}

export default Header;
