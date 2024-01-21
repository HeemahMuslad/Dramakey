import { ReactNode } from "react";
import { Fragment } from "react";
interface Props {
  list: string;
  dataSet: ReactNode[];
  description: ReactNode[];
}
const Main = ({ list, dataSet, description }: Props) => {
  return (
    <>
      <div
        className="w-md mx-auto grid-wrap lg:w-lg
      "
      >
        {list}
        <div className="grid grid-cols-6 gap-3 mt-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {dataSet.map((dataa, index) => (
          <Fragment key={index} >
            <div className=" border border-black-600">
              <img src={`${dataa}`} alt="" />
              <h1 className="px-3 py-5 text-align ">{description[index]}</h1>
            </div>
          </Fragment>
        ))}
      </div>
      </div>
      
    </>
  );
};

export default Main;
