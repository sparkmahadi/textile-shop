import React from 'react';
import { CgArrowsHAlt } from 'react-icons/cg';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const Creative = () => {
    const items = [
        'Learn creative skills to achieve your goals.',
        "Tune in and level up at your own pace.",
        "Go from dabbler to master in a matter of hours.",
        "Connect with a global community of curious creatives."
    ]
    return (
        <div data-aos="fade-up" className='lg:flex items-center gap-5 justify-around mt-10 lg:mt-20 p-10 lg:p-20 bg-secondary text-white rounded-lg my-5'>
            <div className='lg:flex items-center gap-5 lg:w-1/3'>
                <h2 className=' text-xl lg:text-3xl font-semibold text-center leading-snug'>Get Creative with Textile Shop</h2>
                <CgArrowsHAlt className='w-16 h-16 hidden lg:block' />
            </div>
            <ul className='list-disc tracking-wide leading-loose py-5 lg:py-0'>
                {
                    items.map((item, i) => 
                    <li className='flex gap-5 items-center' key={i}>
                        <MdOutlineFeaturedPlayList className='w-6 h-6' />
                        <p>{item}</p>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Creative;