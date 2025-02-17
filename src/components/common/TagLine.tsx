import brackets from "@assets/svg/Brackets";

type TagLineProps = {
  className: string;
  children: string;
};

const TagLine: React.FC<Partial<TagLineProps>> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
