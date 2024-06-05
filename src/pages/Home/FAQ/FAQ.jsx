import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FAQDetail from './FAQDetail';
import { useEffect } from 'react';
import { useState } from 'react';

const FAQ = () => {
    const [questions, setQustions] = useState([]);

    useEffect(()=>{
        fetch('https://techsync-server.vercel.app/faq')
        .then(res=> res.json())
        .then(data=>setQustions(data))
    },[])
    return (
        <div data-aos="fade-down-right" data-aos-duration="1000" className='faq-div'>
            <section>
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-xl lg:text-3xl font-bold leading-none text-center">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        {
                            questions.map((question, idx) => <FAQDetail
                                key={idx}
                                question={question}
                            ></FAQDetail>)
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default FAQ;