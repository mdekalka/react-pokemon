export const getLastCharBeforeSlash = (path: string) => {
  if (!path) return '';

  const partials = path.split('/').filter(partial => !!partial);

  return partials[partials.length - 1];
}
