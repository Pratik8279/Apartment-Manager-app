import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter_it, get_data, search_it, sort_it } from "../../Redux/actions";
import styles from "./Home.module.css";
import Load from "./Load";
import SingleUnit from "./SingleUnit";

function Home() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [sortVal, setSortVal] = useState("null");
  let data = useSelector((state) => state.app.data);
  console.log(data);
  const loading = useSelector((state) => state.app.loading);

  localStorage.setItem("page", page);

  useEffect(() => {
    dispatch(get_data(page, sortVal));
  }, [page]);

  const handleChange1 = (e) => {
    let val = e.target.value;
    setSortVal(val);
    dispatch(sort_it(val));
  };

  const handleChange2 = (e) => {
    let val = e.target.value;
    dispatch(filter_it(val));
  };

  const handleKey = (e) => {
    let val = e.target.value;
    dispatch(search_it(val));
  };
  if (loading)
    return (
      <div id={styles.contain}>
        <Load />
      </div>
    );

  return (
    <div id={styles.main}>
      <div id={styles.options}>
        <select name="" id="selec" onChange={handleChange1}>
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <select name="" id="selec2" onChange={handleChange2}>
          <option value="">Resident Type</option>
          <option value="Owner">Owner</option>
          <option value="Tenant">Tenant</option>
        </select>

        <input
          type="text"
          onKeyUp={handleKey}
          placeholder="Search name here..."
        />
      </div>

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
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
