import React, {useMemo, useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import GetList from './GetList';


export default function App({data1}) {

  const [data, setData] = useState([]);


  useEffect(() => {
    
    Tabletop.init({
      key:data1,
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);


  return (
    <>

<div>
      <h1>Sample Upload from google sheet</h1>
        </div>
      <GetList data1 = {data} />
      
    </>
  );
}