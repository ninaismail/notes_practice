import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const NoteSkeleton = ({cards}) => {
    return (
    <>
    {Array(cards).fill(0).map((_, i) => (
        <div
        key={i} 
        className="relative w-100 p-6 rounded-2xl shadow min-h-[264px]"
        >
            <h1 className="w-3/4 mb-3">
                <Skeleton className='h-6'/>
            </h1>
            <p className="w-full">
                <Skeleton/>
            </p>
            <p className="w-full">
                <Skeleton/>
            </p>
            <p className="w-full">
                <Skeleton/>
            </p>
            <p className="w-1/3">
                <Skeleton/>
            </p>
            <hr className='mt-3'/> 
            <div className="absolute w-40 bottom-6">
                <Skeleton className='py-3 px-4 rounded-lg'/>
            </div>
        </div>
    ))}
    </>);
};
  
export default NoteSkeleton;
