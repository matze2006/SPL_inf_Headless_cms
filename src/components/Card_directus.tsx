import React from 'react';

type Props = {
    people: any
};

export default function Card_directus({ people }: Props) {
    const imageUrl = `http://localhost:8055/assets/${people.picture}`;
    return (
        <div className="rounded-xl bg-white w-full h-full font-main flex flex-col">
            <img className='rounded-xl w-full h-60 object-cover' src={imageUrl}/>
            <div className="flex-1 flex flex-col justify-between p-3">
                <div>
                    <p className="font-bold pb-2">{people.firstname} {people.lastname}</p>
                    <p>{people.description}</p>
                </div>
            </div>
        </div>
    );
}
