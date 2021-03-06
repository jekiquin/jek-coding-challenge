import { getTopCoins } from '../../../utils/third-party-api';

export default async function handler(req, res) {
	const { unit } = req.query;
	const response = await getTopCoins(unit);
	res.status(200).json(response.data);
}
