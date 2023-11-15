const maker = (name: string) => {
  const lowerCaseName = name.toLowerCase().replace(/\s+/g, '-');

  // remove white spaces and replace with dashes

  const urlFriendlyName = encodeURIComponent(lowerCaseName);
  return name ? `${urlFriendlyName}` : null;
};
export default maker;
