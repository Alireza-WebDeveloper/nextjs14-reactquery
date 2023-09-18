'use client';

import useGetProduct from './Hook/useGetCourse';
import Course from './Components/Course';

const Home = () => {
  const { data: courses, isError, isLoading } = useGetProduct();
  if (isLoading) return <>loading...</>;
  return <>{courses && <Course courses={courses} />}</>;
};

export default Home;
