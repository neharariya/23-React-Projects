'use client'

import React,{useEffect, useState} from 'react'

const Quotes = () => {

    const [quote, setQuote] = useState([]);

    const quotes=["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the results of other people's thinking. -Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"]

        useEffect(() => {
          
            const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
            setQuote(randomQuote);
          
        }, [])
        

        



  return (

    <p className="font-bold text-3xl">{quote}</p>
    
  )
}

export default Quotes