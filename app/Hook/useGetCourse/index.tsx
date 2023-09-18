import { asyncGetCourse } from '@/app/StateManagement/Service/Coures';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = () => {
  const queryKey = ['course'];
  const { data, isLoading, isError } = useQuery(queryKey, asyncGetCourse);
  return { data, isError, isLoading };
};

export default useGetProduct;
