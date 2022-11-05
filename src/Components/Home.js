import React from 'react';
import React, { Component } from 'react';
function Home() {
    const information = [
        {
            id: 1,
            name: '',
            info: "",
            image: "",
            price: ''
        },
        {
            id: 2,
            name: '',
            info: "",
            image: "",
            price: ''
        }, {
            id: 3,
            name: '',
            info: "",
            image: "",
            price: ''
        }, {
            id: 4,
            name: '',
            info: "",
            image: "",
            price: ''
        }];
    return (
        render(
            information.map((x) => {
                <>
                    <div className='card'>{x.id}</div>
                </>
            })
        )
  )
}

export default Home