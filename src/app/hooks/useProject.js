import { getProjects } from "app/redux/slices/projectSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProjects = () => {
  const dispatch = useDispatch();
  const { error, project, loading } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return {
    project,
    isError: error,
    isLoading: loading,
  };
};

export default useProjects;
