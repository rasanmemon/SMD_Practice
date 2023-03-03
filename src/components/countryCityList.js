import { useEffect, useState } from "react";
import "../App.css";
const CountryCityList = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [countryId, setCountryId] = useState(1);
  const [citiesList, setCities] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState();

  const onhandleChange = (e) => {
    // console.log(e.target.value);

    setFilterSearch(citiesList);
    setSearch(e.target.value.toLowerCase());
  };

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
  useEffect(() => {
    setLoading(true);
    fetch("https://api.eatachi.co/api/City/ByCountry/" + countryId)
      .then((response) => {
        return response.json();
      })
      .then((cities) => {
        setCities(cities);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [countryId]);
  useEffect(() => {
    setFilterSearch(citiesList);
    const searcher = filterSearch?.map((d, i) => {
      if (
        d.Name.toLowerCase().startsWith(search) ||
        d.Name.toLowerCase().includes(search)
      ) {
        return d;
      } else {
        return null;
      }
    });
    const filterSearcher = searcher?.filter(function (element) {
      return element !== null;
    });
    // console.log(filterSearcher);
    setFilterSearch(filterSearcher);
    /* eslint-disable  */
  }, [search]);

  const onCountryChange = (e) => {
    setCountryId(e.target.value);
  };
  return (
    <div className="main">
      <div style={{ color: "blue" }}>Mobile App Class</div>
      <div style={{ fontSize: 16 }}>List of Countries and Cities</div>
      {/* <div style={{ paddingTop: 16, paddingBottom: 16 }}>
        <button onClick={()=>addData()}>Add Data 2</button>
        <button onClick={addData}>Add Data</button>
      </div> */}
      <div style={{ fontWeight: "bold", padding: 8 }}>
        Total Students: {count}
      </div>
      <div>
        <select value={countryId} onChange={onCountryChange}>
          {
            //data & or data?.map
            data?.map((d, i) => (
              <option key={`ctry__${i}`} value={d.CountryId}>
                {d.Name}
              </option>
            ))
          }
        </select>
      </div>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <div className="search-box">
            <div>Search Box:</div>
            <input
              className="input-box"
              value={search}
              onChange={onhandleChange}
            />
          </div>
          <div className="table">
            <div className="header">
              <div className="col1">City ID</div>
              <div className="col2">Name</div>
            </div>
            {search !== ""
              ? filterSearch
                  ?.sort((a, b) => (a.Name > b.Name ? 1 : -1))
                  .map((d, i) => (
                    <div className="row" key={i}>
                      <div className="col1">{d.CityId}</div>
                      <div className="col2">{d.Name}</div>
                    </div>
                  ))
              : //data & or data?.map
                citiesList
                  ?.sort((a, b) => (a.Name > b.Name ? 1 : -1))
                  .map((d, i) => (
                    <div className="row" key={i}>
                      <div className="col1">{d.CityId}</div>
                      <div className="col2">{d.Name}</div>
                    </div>
                  ))}
          </div>
        </>
      )}

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
export default CountryCityList;
