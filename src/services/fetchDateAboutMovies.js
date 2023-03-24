import axios from 'axios';

const API_KEY = '55908c20a8c5b517b5247533a2b5c98b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrending(media_type, time_window, controller) {
  try {
    const response = await axios.get(`/trending/${media_type}/${time_window}`, {
      params: {
        api_key: API_KEY,
      },
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSearch(query) {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDetails(movie_id) {
  try {
    const response = await axios.get(`/movie/${movie_id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCredits(movie_id, controller) {
  try {
    const response = await axios.get(`/movie/${movie_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchReviews(movie_id, controller) {
  try {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//https://api.themoviedb.org/3/movie/550?api_key=55908c20a8c5b517b5247533a2b5c98b
