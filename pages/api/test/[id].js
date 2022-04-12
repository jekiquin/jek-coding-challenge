export default async function handler(req, res) {
	const { id, unit } = req.query;
	const response = await axios.get(`http://localhost:3005/${unit}/${id}`);
	res.status(200).json(response.data);
}
