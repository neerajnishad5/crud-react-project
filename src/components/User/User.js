// useLocation hook is used to get via state property sent from user-list page
import { useLocation, useNavigate } from "react-router-dom";
// importing bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";

import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

export default function User() {
  /* useLocation() contains {
    state: {},
    hash: "",
    key: "",
    pathname: "",
    search: ""
  } */

  let { state } = useLocation();
  console.log(useLocation());

  // states for modal

  const [showModal, setShowModal] = useState(false);

  // for opening and closing on model
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const getUserById = async (id) => {
    let res = await axios.get("http://localhost:4000/user-api/user/${id}");
    return res.data;
  };

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  // edit user

  const editUser = () => {
    openModal();

    // set already put data to input fields, this uses name property of react-hook-form

    setValue("username", state.username);
    setValue("email", state.email);
    setValue("imageUrl", state.imageUrl);
    setValue("dob", state.dob);

    // set values to input field
  };

  // save user
  const saveUser = async () => {
    closeModal();

    // calling getValues from react-hook-form
    let modifiedUser = getValues();

    modifiedUser.id = state.id;

    console.log("modified user: ", modifiedUser);

    // make http put req

    let res = await axios.put(
      `http://localhost:4000/user-api/update/user/${modifiedUser.id}`,
      modifiedUser
    );

    // logging the object
    console.log(res);

    // setting the data to screen
    console.log("res data paylaod: ", res.data.payload);
    console.log("res data: ", res.data);

    setModifyToScreen(modifiedUser);
    goToUserList();
  };

  const [modifyToScreen, setModifyToScreen] = useState(state);

  // navigate hook
  const navigate = useNavigate();

  // go to list navigate
  const goToUserList = () => {
    navigate("/user-list");
  };

  const deleteUser = async (id) => {
    let res = await axios.delete(
      `http://localhost:4000/user-api/delete/user/${id}`
    );
    console.log("Deleted object: ", res);

    goToUserList();
  };

  return (
    <div>
      <h1 className="text-center mb-4">User details</h1>

      <div className="text-white">
        <div className="card row special mx-auto text-center shadow-lg p-3 mb-5 w-50 rounded">
          <img
            className="card-img-top col img-thumbnailrounded-circle"
            src={state.imageUrl}
            alt="Card image cap"
          />
          <div className="card-body col">
            <h5 className="card-title">User ID: {modifyToScreen.id}</h5>
            <h5 className="card-title">Name: {modifyToScreen.username}</h5>
            <h5 className="card-title">Email: {modifyToScreen.email}</h5>
            <h5 className="card-title">Date of birth: {modifyToScreen.dob}</h5>
            <button className="btn btn-dark me-2" onClick={editUser}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteUser(modifyToScreen.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* modal for edit */}

      {/* backdrop = static avoids closing modal when click done anywhere except close */}
      <Modal show={showModal} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* use edit form */}
          <form className="p-3 bg-dark text-white rounded">
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
                disabled="true"
              />

              {/* errors will return when field validation fails  */}
              {errors.imageUrl && (
                <span className="text-danger">Image URL is required</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={saveUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
