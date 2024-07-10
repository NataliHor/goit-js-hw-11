export function getPictures(query) {
  const API_KEY = '44809751-3b2ccf197f9e8e95d68b14f11';

  return fetch(
    `https://pixabay.com/api?key=44809751-3b2ccf197f9e8e95d68b14f11&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
