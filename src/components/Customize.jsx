import { FaWandMagicSparkles } from "react-icons/fa6";
import { useContext } from "react";
import { QuoteCardContext} from "../context/QuoteCard";


const Customize = () => {

  const { backgroundColors, setBackgroundColor } = useContext(QuoteCardContext)

  return (
    <div className="py-3">
      <div className="flex items-center gap-2 text-primary">
        <FaWandMagicSparkles />
        <h5 className="font-bold tracking-wider capitalize"> customize card </h5>
      </div>
      <hr className="mt-1 mb-4" />

      <div className="flex flex-col gap-2 text-sm">
        <h5 className="text-sm">Background Color</h5>
        <div className="flex items-center gap-2">
          { backgroundColors.map((color, index) => ((
            <button key={index} className={`${color} capitalize p-2 px-4 rounded`} onClick={() => setBackgroundColor(color)}>
              a
            </button>
          )))}
        </div>
      </div>

    </div>
  )
}

export default Customize
