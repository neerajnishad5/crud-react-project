import "./UserList.css";
// importing bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./UserList.css";
import axios from "axios";
import User from "../User/User";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState([]);
  const [gotData, setgotData] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const showSpinner = () => {
    return (
      <div>
        <div class="spinner-border" role="status"></div>
      </div>
    );
  };

  const navigateToAUser = (user) => {
    navigate(`/user/${user.id}`, { state: user });
  };

  

  const dipslayData = () => {
    return (
      <div>
        <h2 className="mb-3">Users list</h2>
        <div className="row bg-dark rounded p-5">
          {data.map((user) => (
            <div
              className="col text-white col-sm-12 col-md-6 col-lg-4 text-center mx-auto h-100"
              key={user.id}
            >
              <div className="card special mx-auto text-center shadow-lg p-3 mb-5 w-50 rounded">
                <img
                  width={"20%"}
                  className="card-img-top rounded-circle"
                  src={user.imageUrl}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.username}</h5>
                  <button
                    onClick={() => navigateToAUser(user)}
                    className="btn profile-btn text-dark btn-md"
                  >
                    Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getData = async () => {
    // if (getData === 0) {
    //   dipslayData();
    // }else
    const userData = await axios.get("http://localhost:5555/users");
    // 3(userData.data);
    setData(userData.data);
    // console.log("logging data", data);
  };

  const navigate = useNavigate();

  const goToUser = () => {
    navigate("/user");
  };
  return (
    <div className="text-center">
      {data.length > 0 ? dipslayData() : <div>{showSpinner()}</div>}
      {data.length === 0 ? <h2>No users exist!</h2> : <h2></h2>}
    </div>
  );
}
