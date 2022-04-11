import { getTopCoins } from '../../utils/third-party-api';

export default async function handler(_req, res) {
	const response = await getTopCoins();
	res.status(200).json(response.data);
}
