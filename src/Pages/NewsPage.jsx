import React from "react";
import MyNews from "../Components/MyNews";
import BusinessNews from "../Components/BusinessNews";
import EntertainmentNews from "../Components/EntertainmentNews";

const NewsPage = () => {
  return (
    <>
      <EntertainmentNews />
      <MyNews />
      <BusinessNews />
    </>
  );
};

export default NewsPage;
