// TODO debug
// // pages/api/projects.js
// import axios from 'axios';

// const WAKATIME_API_KEY =""
// export default async function handler(req, res) {
//   try {
//     const response = await axios.get('https://wakatime.com/api/v1/users/current/projects', {
//       headers: {
//         'Authorization': `Bearer ${WAKATIME_API_KEY}`
//       }
//     });
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error fetching projects:', error.message);
//     res.status(500).json({ error: 'Failed to fetch projects' });
//   }
// }
