import { useState } from "react";
import "./App.css";

function App() {
 
  const [tables, setTables] = useState([]);

  const handleamountChange = (e,ind) => {
  let cptables=[...tables];
  let mobj=cptables.map((el,no)=>{
    if(no==ind){
      el.amount=e.target.value;
    }
    return el;
  })
  setTables(mobj);
  };

  const insertNewRow=()=>{
    let cptables=[...tables];
    cptables=[...cptables,{itemName:`Item ${tables.length+1}`}]
    setTables(cptables);
  }

  const clearAll=()=>{
    setTables([]);
  }
  const deleteEl=(ind)=>{
    let cptables=[...tables];
    cptables=cptables.filter((el,inde)=>inde!=ind);
    setTables(cptables);
  }
  const handleSubmit = () => {
    console.log(tables)
  };


  return (
    <>
      <div className="btnnm">
        <button className="btn1" onClick={insertNewRow}>Insert New Row</button>
        {tables.length >=1 && <button className="btn1" onClick={clearAll}>Clear Row</button>}
        <button onClick={handleSubmit} className="btn1">
          Submit Row
        </button>
      </div>
      <br></br>
      <div>
        <table>
          <tbody>
            <tr className="headd">
              <th>Item Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
            {tables.length>0 && tables.map((item,ind)=>{
              return(
                <tr key={ind}>
                <td>Item {ind+1}</td>
                <td>
                 
                  <input
                    value={item.amount}
                    name={`amount${ind}`}
                    onChange={(e)=>handleamountChange(e,ind)}
                    placeholder="Enter Amount"
                  />
                </td>
                <td>
                 
                  <button className="btnd" onClick={()=>deleteEl(ind)}>Delete</button>
                </td>
              </tr>
              )
             
            })}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

