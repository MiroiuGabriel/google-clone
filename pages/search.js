import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import response from '../response';
import Footer from '../components/Footer';

function Search({ results }) {
	const router = useRouter();
	console.log(results);
	return (
		<div>
			<Head>
				<title> {router.query.term} - Google Search</title>
			</Head>

			<Header />
			<SearchResults results={results} />
			<Footer />
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const useDummyData = false;
	const startIndex = context.query.start || '1';

	const data = useDummyData
		? response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.api_key}&cx=${process.env.context_key}&q=${context.query.term}&start=${startIndex}`
		  ).then(response => response.json());

	return { props: { results: data } };
}
