import { useEffect, useState } from "react";
import myAxios from "../service/axios";

const useFetchData = (keyParam) => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const queryParams = {
        search: keyParam,
      };
      const data = await myAxios.get("jewelry", {
        params: queryParams,
      });
      setListData(data.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [listData,loading];
};
export default useFetchData;
