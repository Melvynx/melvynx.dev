interface TextWithLinkProps {
  text: string;
  url?: string;
}

export function ConditionalLink({ text, url }: TextWithLinkProps) {
  if (url) {
    return (
      <a href={url} className="text-blue-500 font-medium hover:underline">
        {text}
      </a>
    );
  }
  return <span className="font-medium">{text}</span>;
}
