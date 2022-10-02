import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_data } from "../../Redux/actions";
import styles from "./Home.module.css";
import Load from "./Load";
import SingleUnit from "./SingleUnit";

function Home() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.app.data);
  const loading = useSelector((state) => state.app.loading);
  localStorage.setItem("page",page)
  useEffect(() => {
    dispatch(get_data(page));
  }, [page]);

  // const handleClick = (val)=>{
  //   if (page + val > 1 && page + val <= num + 2) {
  //     setPage(val)
  //   }
  // }

  if (loading) return <div id={styles.contain}><Load/></div> 
    
  return (
    <div id={styles.main}>
      <table className="table  m-auto table-striped table-hover">
        <thead>
          <tr>
            <td>Sr No</td>
            <td>Name</td>
            <td>Wing</td>
            <td>Room No</td>
            <td>Type</td>
            <td>Contact No</td>
            <td>Maintainance Status</td>
            <td>Remove</td>
            <td>Update</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((ele) => (
              <tr key={ele.id}>
                <SingleUnit data={ele} id={ele.id} />
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button  onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
