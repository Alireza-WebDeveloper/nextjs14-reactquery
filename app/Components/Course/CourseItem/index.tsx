import { CourseState } from '@/app/Model/Coures';

interface CourseItemProps {
  course: CourseState;
}
const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-semibold">{course.course_name}</h2>
      <p className="text-gray-600 text-sm">{course.instructor}</p>
      <p className="text-gray-700 my-2">{course.description.slice(0, 30)}</p>
      <p className="text-gray-600">Duration: {course.duration}</p>
      <p className="text-green-600 font-semibold mt-2">${course.price}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseItem;
