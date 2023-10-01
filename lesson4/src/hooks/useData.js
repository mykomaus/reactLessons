import { useState, useMemo } from "react";
import {
  createVehicle,
  deleteVehicle,
  editVehicle,
  getVehicles,
} from "../services/api";
import { useEffect } from "react";
import { asc, desc } from "../utils/sort";

export const useData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const vehicles = await getVehicles();
    setData(vehicles?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSortData = useMemo(
    () =>
      ({ prop, isAsc }) => {
        const sortOption = isAsc
          ? asc(prop.toLowerCase())
          : desc(prop.toLowerCase());
        setData((current) => current.sort(sortOption));
      },
    []
  );

  const onDelete = (id) => async () => {
    await deleteVehicle(id);
    setData((current) => current.filter((item) => item.id !== id));
  };
  const onEdit = async (id, data) => {
    await editVehicle(id, data);
    setData((current) =>
      current.map((item) => {
        return item.id === id ? data : item;
      })
    );
  };

  const onCreate = async (data) => {
    const result = await createVehicle(data);
    setData((current) => [...current, result?.data]);
  };
  return { onDelete, onSortData, data, onEdit, onCreate };
};
