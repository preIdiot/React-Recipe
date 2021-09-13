
import React, { useContext } from "react";
import { API } from "../backend";

export const Dashboard = React.createContext();

export const useDashboard = () => {
  return useContext(Dashboard);
};

const DashboardProvider = ({ children }) => {
  const fetchData = async ({ dataIndex }) => {
    try {
      const res = await fetch(`${API}/${dataIndex}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      return { data: await res.json() };
    } catch (err) {
      return { error: err.message };
    }
  };

  const value = { fetchData };

  return <Dashboard.Provider value={value}>{children}</Dashboard.Provider>;
};

export default DashboardProvider;
