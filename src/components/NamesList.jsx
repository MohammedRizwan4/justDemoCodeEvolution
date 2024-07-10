import React from 'react'
import List from './List'

export default function NamesList() {
    const persons = [
        {
            id: 1,
            name: "Rizwan",
            skill: "React Js"
        },
        {
            id: 2,
            name: "Raiyan",
            skill: "Vue Js"
        },
        {
            id: 3,
            name: "Usman",
            skill: "Angular Js"
        },
    ]

    const namesList = persons.map(person => <List key={person.id} person={person} />)
    return (
        <div>{namesList}</div>
    )
}
