export default function Video({
  sources,
  poster,
}: {
  sources: Array<{ url: string; type: 'video/webm' | 'video/mp4' }>;
  poster?: string;
}) {
  return (
    /* eslint-disable-next-line jsx-a11y/media-has-caption */
    <video
      controls
      poster={poster ? `${import.meta.env.BASE_URL}${poster}` : undefined}
      width="100%"
    >
      {sources.map((source, idx) => (
        <source key={idx} src={`${import.meta.env.BASE_URL}${source.url}`} type={source.type} />
      ))}
      Download the video file:
      {sources.map((source, idx) => (
        <a href={source.url} key={idx}>
          format type: {source.type}
        </a>
      ))}
    </video>
  );
}
