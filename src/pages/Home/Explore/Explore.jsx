import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://techsync-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    console.log(courses);

    return (
        <div data-aos="zoom-in" className='mt-10 lg:mt-20'>
            <div className='bg-secondary px-10 py-10 lg:py-20 text-white rounded-lg'>
                <h2 className='text-center text-2xl font-semibold mb-5'>Explore Inspiring Online Courses</h2>
                <div data-aos="zoom-in" className='flex flex-wrap justify-center gap-5'>
                    {
                        courses.map(course =>
                            <Link to={`/course-details/${course.id}`} key={course._id}><button className='btn btn-outline btn-sm lg:btn-md text-white'>{course.courseTitle}</button></Link>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Explore;