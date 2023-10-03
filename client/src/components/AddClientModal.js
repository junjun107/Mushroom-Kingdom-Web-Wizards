import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQuery";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "yup-phone";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required(),
});
export default function AddClientModal() {
  const { register, handleSubmit, errors, reset } = useForm({
    schema,
  });

  const [addClient] = useMutation(ADD_CLIENT, {
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = async (formData) => {
    try {
      await addClient({
        variables: formData,
      });
      reset();
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  const handleClose = () => reset();
  return (
    <>
      <button
        type="button"
        className="btn btn-success my-3 "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="d-flex align-items-center">
          <FiUserPlus className="icon me-1" />
          <div> New Client</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-success-subtle">
              <h5 className="modal-title" id="addClientModalLabel">
                Add Client
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("name")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    {...register("phone")}
                  />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-success"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
