import Story from "./story";
import Link from "next/link";

export default function Stories() {
    return (
        <div className="flex flex-col items-center bg-amber-100 rounded-md p-4 gap-2 w-full">
            <h3 className="font-bold">Latest Stories</h3>
            <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi cumque assumenda dolorem nulla nobis maxime recusandae fuga, iure, quo non explicabo quisquam ipsum. Officia nihil pariatur iure. Et, iure." date="2024-02-02" />
            <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi cumque assumenda dolorem nulla nobis maxime recusandae fuga, iure, quo non explicabo quisquam ipsum. Officia nihil pariatur iure. Et, iure." date="2024-03-03" />
            <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi cumque assumenda dolorem nulla nobis maxime recusandae fuga, iure, quo non explicabo quisquam ipsum. Officia nihil pariatur iure. Et, iure." date="2024-03-03" />
            <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi cumque assumenda dolorem nulla nobis maxime recusandae fuga, iure, quo non explicabo quisquam ipsum. Officia nihil pariatur iure. Et, iure." date="2024-03-03" />
            <Story text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi cumque assumenda dolorem nulla nobis maxime recusandae fuga, iure, quo non explicabo quisquam ipsum. Officia nihil pariatur iure. Et, iure." date="2024-03-03" />
        </div>
        
    );
}