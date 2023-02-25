import { useEffect, useState } from "react";

const CountryList = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    /* eslint-disable  no-useless-concat */
    fetch("https://api.eatachi.co/api/" + "country")
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        setData(countries);
      })
      .catch((err) => {
        alert(err);
      });
  });
  useEffect(() => {
    setCount(data?.length);
  }, [data]);

  return (
    <div className="main">
      <div style={{ color: "blue" }}>Mobile App Class</div>
      <div style={{ fontSize: 16 }}>Country List</div>
      {/* <div style={{ paddingTop: 16, paddingBottom: 16 }}>
        <button onClick={()=>addData()}>Add Data 2</button>
        <button onClick={addData}>Add Data</button>
      </div> */}
      <div style={{ fontWeight: "bold", padding: 8 }}>
        Total Students: {count}
      </div>
      <div className="table">
        <div className="header">
          <div className="col1">CountryCode</div>
          <div className="col2">Name</div>
          <div className="col3">CurrencyName</div>
        </div>
        {
          //data & or data?.map
          data?.map((d, i) => (
            <div className="row" key={i}>
              <div className="col1">{d.CountryCode}</div>
              <div className="col2">{d.Name}</div>
              <div className="col3">{d.CurrencyName}</div>
            </div>
          ))
        }
      </div>
      {/* <div className="table">
      <div className="row">
        <div style={{ width: "50%", fontWeight: "bold" }}>Roll number</div>
        <div style={{ width: "50%" }}>{data[0].rollnum}</div>
      </div>
      <div className="row">
        <div style={{ width: "50%", fontWeight: "bold" }}>Name</div>
        <div style={{ width: "50%" }}>{data[0].name}</div>
      </div>
      <div className="row">
        <div style={{ width: "50%", fontWeight: "bold" }}>Address</div>
        <div style={{ width: "50%" }}>{data[0].address}</div>
      </div>
    </div> */}
    </div>
  );
};
export default CountryList;
