interface TextWithLinkProps {
  text: string;
  url?: string;
}

export function ConditionalLink({ text, url }: TextWithLinkProps) {
  if (url) {
    return (
      <a
        href={url}
        className="text-neutral-900 underline-offset-4 transition-colors duration-150 hover:text-neutral-400 hover:underline"
      >
        {text}
      </a>
    );
  }
  return <span className="text-neutral-900">{text}</span>;
}
