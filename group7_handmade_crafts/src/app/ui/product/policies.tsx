import { CalendarDaysIcon} from "@heroicons/react/24/solid";
import { FaShippingFast} from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";


export default function Policies(){

  return(
    <div className="mx-7 my-7 pt-7 border-t-2 border-amber-300">
            <h3 className="text-gray-900 text-xl title-font font-medium mb-1">
              shipping and return policies
            </h3>
            <div className="flex flex-row gap-3">
              <CalendarDaysIcon className="w-5 h-5"/>
              <p>Order today to receive it around April 19 Apr-30 May</p>
            </div>
            <div className="flex flex-row gap-3">
              <GiReturnArrow className="w-5 h-5"/>
              <p>Exchanges and returns are accepted within 14 days</p>
            </div>
            <div className="flex flex-row gap-3">
              <FaShippingFast className="w-5 h-5"/>
              <p>Free shipping</p>
            </div>
            
            
            <p className="font-bold"></p>
            {/* <p className="mb-2 text-wrap">{product_description}</p> */}
    </div>
  )

}




