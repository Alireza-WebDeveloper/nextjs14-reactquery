import BaseApi from '../Base';
import { CourseState } from '@/app/Model/Coures';
const asyncGetCourse = async () => {
  try {
    const response = await BaseApi.get<CourseState[]>('/course');
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { asyncGetCourse };
