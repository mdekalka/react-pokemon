export const getParsedUrl = (url: string) => {
  try {
    const resultUrl = new URL(url);

    return resultUrl;
  } catch (e) {
    return null;
  }
}

export const getSearchFromUrl = (url: string) => {
  const resultUrl = getParsedUrl(url);

  if (!resultUrl) return '';

  return resultUrl.search;
}
