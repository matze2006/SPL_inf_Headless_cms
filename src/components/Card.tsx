import React from 'react';

type Props = {
    person: any
};

export default function Card({person}: Props) {
    return (
        <div className="rounded-xl bg-white w-full font-main">
            <img className='justify-self-center rounded-xl w-full' src={`https://picsum.photos/id/${person.id}/200`}/>
            <div className='p-3'>
                <p className="font-bold pb-2">{person.firstname} {person.lastname}</p>
                <p>{person.phone}</p>
                <p>{person.email}</p>
                <p>{person.birthday}</p>
            </div>
        </div>
    );
}
