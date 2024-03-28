import { createReview } from '@/app/lib/actions';


interface IdType{
  id: string
}

interface BuyerType{
  buyerId: string
}

export default function FormReviews(id:IdType) {

  const itemId = id;
  //console.log(itemId.id);

  
  
  return(

    <div className="text-black">

      <form action={createReview} className="bg-white shadow rounded">
        <div className="min-h-screen md:px-20 pt-6">
          <div className=" bg-amber-200 rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold mb-10">CREATE REVIEW</h1>
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
                <label htmlFor="title" className="text-lx font-serif">Add Title:</label>
                <input type="text" placeholder="title" id="title" name="title" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md bg-white" />
                <input type="hidden" name='id' value={itemId.id}/>
                <input type="hidden" name='buyerId' value='1aa97dfd-5aa0-4f80-afce-8cef34880226'/>
              </div>
              <div>
                <label htmlFor="review" className="block mb-2 text-lg font-serif">Add Comment:</label>
                <textarea id="review" name="review" placeholder="What did you like? What did you not like?.." className="w-full font-serif  p-4 text-gray-600 bg-white outline-none rounded-md"></textarea>
              </div>
              <button type="submit" className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600">Send Review</button>
            </div>
          </div>
        </div>
      </form>
    
    </div>
  
  
    )
}