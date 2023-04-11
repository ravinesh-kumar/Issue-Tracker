import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const IssueManager = () => {
    const [userArray, setUserArray] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateFormData, setUpdateFormData] = useState(null);
  
    const getDataFromBackend = async () => {
      setLoading(true);
  
      const response = await fetch("http://localhost:5000/issue/getall");
      const data = await response.json();
  
      console.log(data);
      setUserArray(data);
      setLoading(false);
    };
  
    const deleteUser = async (id) => {
      console.log(id);
  
      const response = await fetch("http://localhost:5000/issue/delete/" + id, {
        method: "Delete",
      });
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "User deleted successfully",
        });
  
        //get data from backend
        getDataFromBackend();
      }
    };
  
    // const updateUser = (user) => {
    //   console.log(user);
    //   setUpdateFormData(user);
    //   setShowUpdateForm(user);
    // };
    useEffect(() => {
      getDataFromBackend();
    }, []);
  
    const displayUser = () => {
      if (loading) {
        return (
          <div>
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Loading...</span>
            </button>
            <button class="btn btn-primary" type="button">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
           
          </div>
        );
      } else {
        return userArray.map(({ _id,title,type,assignedBy, assignedTo, org,createdAt, status, closed }) => (
          <tr key={_id}>
            <td>{title}</td>
            <td>{type}</td>
            <td>{assignedBy}</td>
            <td>{assignedTo}</td>
            <td>{org}</td>
            <td>{createdAt}</td>
            <td>{status}</td>
            <td>{closed}</td>
            
            {/* <td>
            <Button
              className="btn btn-primary"
              onClick={(e) => updateUser({ _id,title,type,assignedBy, assignedTo, org,createdAt, status, closed})}
            >
              {" "}
              <i class="fas fa-pen-nib"></i>
            </Button>
          </td>
          <td>
            <Button className="btn btn-danger"
             onClick={(e) => deleteUser(_id)}>
              <i class="fas fa-trash"></i>{" "}
            </Button>
          </td> */}
          </tr>
        ));
      }
    };
    return (
      <div>
        <h1 className="text-center">database</h1>
        <div className="row">
          <div className="col-md">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Assigned By</th>
                  <th>Assigned To</th>
                  <th>Organisation</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Closed</th>
                </tr>
              </thead>
              <tbody>{displayUser()}</tbody>
            </table>
          </div>
          {showUpdateForm ? (
            <div className="col-md">
              {/* <UpdateUser
                updateFormData={updateFormData}
                setShowUpdateForm={setShowUpdateForm}
                getDataFromBackend={getDataFromBackend}
              /> */}
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    );
  };

export default IssueManager;