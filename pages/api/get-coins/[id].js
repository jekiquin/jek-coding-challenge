import { getCoin } from '../../../utils/third-party-api';

export default async function handler(req, res) {
	const { unit, id } = req.query;
	const response = await getCoin(id, unit);
	res.status(200).json(response.data);
}
