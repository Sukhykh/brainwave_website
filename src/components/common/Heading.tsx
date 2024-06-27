import TagLine from "@components/common/TagLine";

type HeadingProps = {
  className: string;
  title: string;
  text: string;
  tag: string;
};

const Heading: React.FC<Partial<HeadingProps>> = ({
  className,
  title,
  text,
  tag,
}) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <h2 className="body-2 mt-4 text-n-4">{text}</h2>}
    </div>
  );
};

export default Heading;
