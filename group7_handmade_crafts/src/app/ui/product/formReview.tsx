import { createReview } from '@/app/lib/actions';
import {lato, patrick_hand} from '@/app/ui/fonts'


interface IdType{
  id: string
}


export default function FormReviews(id:IdType) {

  const itemId = id;
  //console.log(itemId.id);

  
  return(

    

      <form action={createReview} className={`${lato.className} shadow rounded`}>
        <div className="min-h-screen md:px-20 pt-6">
          <div className=" bg-amber-200 rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className={`${patrick_hand.className} text-center text-2xl font-bold mb-10`}>CREATE REVIEW</h1>
            <div className="space-y-4">


            <div className="mb-4">
              <label className="block mb-1">Rating</label>
              <div className="flex items-center space-x-2">
                <input type="radio" name="rating" id="rating1" value="1" className="focus:outline-none bg-white-100 focus:ring-2 focus:ring-blue-500"/>
                <label htmlFor="rating1">1</label>
                <input type="radio" name="rating" id="rating2" value="2" className="focus:outline-none focus:ring-2 focus:ring-blue-500 "/>
                <label htmlFor="rating2">2</label>
                <input type="radio" name="rating" id="rating3" value="3" className="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <label htmlFor="rating3">3</label>
                <input type="radio" name="rating" id="rating4" value="4" className="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <label htmlFor="rating4">4</label>
                <input type="radio" name="rating" id="rating5" value="5" className="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <label htmlFor="rating5">5</label>
              </div>
            </div>
            
              <div>
                <label htmlFor="title" className="text-lx">Add Title:</label>
                <input type="text" placeholder="title" id="title" name="title" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md bg-white"/>
                
                <input type="hidden" name='id' value={itemId.id}/>
                
              </div>
              <div>
                <label htmlFor="title" className="text-lx">Add Name/Nickname:</label>
                <input type="text" placeholder="name/nickname" id="reviewer" name="reviewer" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md bg-white"/>
              </div>
              <div>
                <label htmlFor="review" className="block mb-2 text-lx">Add Comment:</label>
                <textarea id="review" name="review" placeholder="What did you like? What did you not like?.." className="w-full p-4 text-gray-600 bg-white outline-none rounded-md"></textarea>
              </div>
              <button type="submit" className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-white bg-amber-400 hover:bg-green-500">Send Review</button>
            </div>
          </div>
        </div>
      </form>
    
    
  
  
    )
}