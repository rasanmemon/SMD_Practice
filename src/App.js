import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [data, setData] = useState(null);
  const [count,setCount]= useState(0);
useEffect(()=>{ console.log("everytime")},)
useEffect(()=>{console.log("on pageload")
setData([{
  rollnum: 1,
  name: "Rasan",
  address: "Karachi",
},
{
  rollnum: 2,
  name: "Rafiq",
  address: "Jamshed Road",
}
,]);

}
,[])
useEffect(()=>{console.log("data updated")
setCount(data?.length)
},[data])

  const addData =()=>{
    const newData2 = data.slice();

    //using reduce

    // let maxValue = data.reduce((acc, value) => {
    //   return (acc = acc > value.rollnum ? acc : value.rollnum);
    // }, 0);

    //using map and max func
     const rollNums = newData2.map((a)=> a.rollnum);
     const nextRollNum = Math.max(...rollNums)+1
  
    
     // const newData1 = [...data]
    newData2.push({
      rollnum:nextRollNum,
      name:"Raheel",
      address:"Islamabad"
    })
    setData (newData2);
    // setCount(data?.length)
    // alert("hi")
  }
  return (
    <div className="main">
      <div style={{ color: "blue" }}>Mobile App Class</div>
      <div style={{ fontSize: 16 }}>Flex direction column</div>
      <div style={{paddingTop:16, paddingBottom:16}}>
        {/* <button onClick={()=>addData()}>Add Data 2</button> */}
        <button onClick={addData}>Add Data</button>
      </div>
      <div style={{fontWeight:'bold',padding:8}}>Total Students: {count}</div>
      <div className="table">
        <div className="header">
          <div className="col1">Roll Number</div>
          <div className="col2">Name</div>
          <div className="col3">Address</div>
        </div>
        {
          //data & or data?.map
        data?.map((d, i) => (
          <div className="row" key={i}>
            <div className="col1">{d.rollnum}</div>
            <div className="col2">{d.name}</div>
            <div className="col3">{d.address}</div>
          </div>
        ))}
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

export default App;
