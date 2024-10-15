import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Function to get Spotify Access Token
async function getSpotifyAccessToken() {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  console.log('Client ID:', clientId); // Debugging
  console.log('Client Secret:', clientSecret); // Debugging

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
      grant_type: 'client_credentials'
    }), {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; // Rethrow or handle the error as needed
  }
}

// Function to fetch the latest episode for a podcast
export async function getLatestEpisodeSnippet(showId) {
  try {
    const accessToken = await getSpotifyAccessToken();

    const response = await axios.get(`https://api.spotify.com/v1/shows/${showId}/episodes?limit=1`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const latestEpisode = response.data.items[0];
    return {
      name: latestEpisode.name,
      description: latestEpisode.description,
      releaseDate: latestEpisode.release_date
    };
  } catch (error) {
    console.error('Error fetching latest episode snippet:', error);
    throw error; // Rethrow or handle the error as needed
  }
}
