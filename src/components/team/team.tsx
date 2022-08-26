import React from 'react';
import './team.css';

export const MeetTeam = () => {
    const members = [
        { id: 0, name: 'Tim Barreto', title: 'Project Manager', image: 'images/tim.jfif'},
        { id: 1, name: 'Benito Campos', title: 'Cloud Engineer Intern', image: 'images/benito.jfif'},
        { id: 2, name: 'Megan Chan', title: 'Software Engineer Intern', image: 'images/megan.jfif' }, 
        { id: 3, name: 'Taylor Nguyen', title: 'Cloud Engineer Intern', image: 'images/taylor.jfif'},
    ]
    return (
        <div className="mainteam">
            <h1>Meet the Team</h1>
            {/* <div className="first">
                    <img src={process.env.PUBLIC_URL+members[0].image} />
                    <p><b>{members[0].name}</b></p>
                    <p>{members[0].title}</p>
                </div> */}
            {(members.slice(0, 4)).map((m: Member) => 
                <div className="profile" key={m.id}>
                    <img src={process.env.PUBLIC_URL+m.image} alt="profilepic" />
                    <p><b>{m.name}</b></p>
                    <p>{m.title}</p>
                </div>
                )}
        </div>
    );
}

interface Member {
    id: number;
    name: string;
    title: string;
    image: string;
}