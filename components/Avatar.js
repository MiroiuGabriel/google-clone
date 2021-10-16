import Image from 'next/image';

function Avatar({ url, className }) {
	return (
		<img
			loading="lazy"
			src={url}
			alt="profile"
			className={`h-10 rounded-full cursor-pointer transition duration-150 hover:scale-110 ${className}`}
		/>
	);
}

export default Avatar;
