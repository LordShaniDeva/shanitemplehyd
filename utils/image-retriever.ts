const imageRetriever = (filename: string) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/retrieve/${filename}`;

export default imageRetriever;
