import React from 'react';

type Props = {
    person: any
};

export default function Card({ person }: Props) {
    return (
        <div className="rounded-xl bg-white w-full h-full font-main flex flex-col">
            <img className='rounded-xl w-full h-60 object-cover' src={`https://picsum.photos/id/${person.id}/200`} />
            <div className="flex-1 flex flex-col justify-between p-3">
                <div>
                    <p className="font-bold pb-2">{person.firstname} {person.lastname}</p>
                    <p>{person.phone}</p>
                    <p>{person.email}</p>
                    <p>{person.birthday}</p>
                </div>
            </div>
        </div>
    );
}
