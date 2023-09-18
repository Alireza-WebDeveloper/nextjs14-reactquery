import { CourseState } from '@/app/Model/Coures';
import CourseItem from '../CourseItem';

interface CourseListProps {
  courses: CourseState[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const renderCourseItems = () => {
    return courses.map((course) => {
      return <CourseItem course={course} key={course.course_id} />;
    });
  };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-3">
      {renderCourseItems()}
    </div>
  );
};

export default CourseList;
