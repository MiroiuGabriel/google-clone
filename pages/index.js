import Head from 'next/head';
import Avatar from '../components/Avatar';
import Image from 'next/image';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
	const searchInputRef = useRef(null);
	const router = useRouter();

	const search = e => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Google</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="flex justify-between w-full p-5 text-sm text-gray-700">
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link"> Store</p>
				</div>

				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer transition duration-200 ease-out" />
					<Avatar url="https://media-exp1.licdn.com/dms/image/C5603AQFhu-ZUS9ZUfA/profile-displayphoto-shrink_200_200/0/1634060673040?e=1639612800&v=beta&t=vKZKOTpKkUZpvgwU_8iH9Pjvdtyd8xoRHYK0G5uNR1o" />
				</div>
			</header>

			<form className="flex flex-col items-center mt-44 flex-grow w-4/5">
				<Image
					src="https://www.google.ro/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					height={100}
					width={300}
				/>
				<div className="flex w-full mt-5 hover:shadow-lg rounded-full focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition duration-200">
					<SearchIcon className="text-gray-500 h-5 mr-3" />
					<input
						type="text"
						className="flex-grow focus:outline-none"
						ref={searchInputRef}
					/>
					<MicrophoneIcon className="text-gray-500 h-5 mr-3" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={search} className="btn">
						Google Search
					</button>
					<button onClick={search} className="btn">
						I'm Feeling lucky
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
}
