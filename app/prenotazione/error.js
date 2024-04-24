'use client'
import React from 'react';
import { useEffect } from 'react';

const Error = ({error, reset}) => {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h1>Error: {error}</h1>
            <button onClick={reset}>Reset</button>
        </div>
    )
}