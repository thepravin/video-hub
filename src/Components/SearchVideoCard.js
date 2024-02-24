import React from 'react';
import { publicshedAgo } from '../utils/functions';

const SearchVideoCard = ({ data }) => {

    // Early return
    if (!data) return null;
   // console.log(data);

    const { channelTitle, thumbnails, title, publishedAt, description } = data?.snippet;
    // Convert publishedAt to days
    const daysSincePublished = publishedAt !== undefined ? publicshedAgo(publishedAt) : "";

    if(!data?.id.videoId){
        return;
    }

    return (
        <div className="h-auto mt-5 bg-gray-300 rounded-lg shadow-lg cursor-pointer flex flex-col md:flex-row items-stretch justify-between overflow-hidden">
            <div className="md:w-1/3 overflow-hidden">
                <img alt="image" src={thumbnails.medium.url} className='w-full h-auto rounded-lg object-cover' />
            </div>
            <div className="md:ml-4 mt-4 md:mt-0 flex-1">
                <h4 className='text-2xl font-sans font-bold'>{title}</h4>
                <h2>{daysSincePublished}</h2>
                <div className='flex items-center mt-2'>
                    <img
                        alt="channelLogo"
                        src="https://www.svgrepo.com/show/350417/user-circle.svg"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h1 className="font-bold break-all text-lg">{channelTitle}</h1>
                        <p className="text-gray-600">2M Subscribers</p>
                    </div>
                </div>
                <p className='break-all mt-3 p-2 text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default SearchVideoCard;
