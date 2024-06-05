
import { useEffect } from 'react';
import { useState } from 'react';
import CourseRootDetails from '../../Courses/CoursesRoot/CourseRootDetails';

const Popular = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://techsync-server.vercel.app/popularCourses')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[]);


    return (
        <div className='mt-10 lg:mt-20 faq-div'>
            <h3 className='text-3xl font-semibold mb-2 text-center'>Popular Courses</h3>
            <p className='mb-5 text-center'>Learn something completely new or improve your existing skills</p>
            <hr className="mb-5 border-gray-300" />
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {
                        courses.map(course =>
                            <CourseRootDetails
                                key={course.id}
                                course={course}
                            ></CourseRootDetails>)
                    }

                </div>
        </div>
    );
};

export default Popular;