import React from 'react'

const Hero = ({ heroName }) => {
    if (heroName === "Joker") {
        throw new Error("Something went wrong")
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
