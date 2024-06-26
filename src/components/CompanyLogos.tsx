import { companyLogos } from "@constants/index";

type CompanyLogosProps = {
  className: string;
};

const CompanyLogos: React.FC<CompanyLogosProps> = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>

      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}>
            <img src={item} alt={item} title={item} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
