import axios from 'axios';

export default async function handler(req, res) {
	const { unit } = req.query;
	const response = await axios.get(`http://localhost:3005/${unit}`);
	res.status(200).json(response.data);
}
