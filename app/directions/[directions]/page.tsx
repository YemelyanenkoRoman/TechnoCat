'use client';
import { DirectionsData } from '@/components/directions/DirectionsData';

const Directions = ({ params }: { params: { directions: string } }) => {
  console.log(params.directions);

  const data = DirectionsData.find((item) => item.id === params.directions);

  return (
    <>
      <div className="mt-[300px]">
        {data ? (
          <div>
            <h1>User: {data.name}</h1>
            <p>ID: {data.id}</p>
          </div>
        ) : (
          <div>User not found</div>
        )}
      </div>
    </>
  );
};

export default Directions;
