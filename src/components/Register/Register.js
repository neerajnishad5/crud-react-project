import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// importing bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";

// exporting Register component
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const isLoading = () => {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  const navigate = useNavigate();

  const goToUserList = () => {
    navigate("/user-list");
  };

  const onSubmit = async (user) => {
    try {
      // console.log(user);

      // making a post request to our json-server
      let res = await axios.post("http://localhost:4000/user-api/register", user);
      setLoading(true);

      // console.log(res);

      // if user created
      if (res.status === 201) {
        goToUserList();
        setErr("");
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  // console.log(watch("username")); // watch input value by passing the name of it
  // console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <div className="">
      <h2 className="text-center">Register</h2>
      <h2 className="text-center text-danger">{err}</h2>

      <div className="row">
        <div className="mb-3 mx-auto col-12 col-md-8 col-lg-6">
          <form
            className="p-3 bg-dark text-white rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* register your input into the hook by invoking the "register" function */}

            <div className="col">
              <label htmlFor="username">Name</label>
              <input
                className="form-control"
                {...register("username", {
                  required: true,
                })}
              />
              {/* errors will return when field validation fails  */}
              {errors.username && (
                <span className="text-danger">Email is required</span>
              )}
            </div>

            <div className="col   ">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                {...register("email", {
                  required: true,
                  // pattern: {
                  //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //   message: "Invalid email address!",
                  // },
                })}
              />

              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-danger">Email is required</span>
              )}
            </div>

            <div className="  col  ">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                className="form-control"
                {...register("dob", { required: true })}
              />

              {/* errors will return when field validation fails  */}
              {errors.dob && (
                <span className="text-danger">DOB is required</span>
              )}
            </div>

            <div className="  col  ">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                className="form-control"
                {...register("imageUrl", { required: true })}
              />

              {/* errors will return when field validation fails  */}
              {errors.imageUrl && (
                <span className="text-danger">Image URL is required</span>
              )}
            </div>

            <div className="row">
              <div className="col">
                <button
                  className="btn btn-success d-block mx-auto btn-md mt-3"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success d-block mx-auto btn-md mt-3"
                  type="submit"
                  onClick={goToUserList}
                >
                  Users list
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
