import { Button, TextField } from "@mui/material"
import { Formik } from "formik"
import { useState } from "react"
import Swal from "sweetalert2"
import "../AddIssue/AddIssue1.css"

const AddIssue1 = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  const userSubmit = async (formdata) => {
    console.log(formdata)
    const response = await fetch("http://localhost:5000/issue/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      console.log("success")
      Swal.fire({
        icon: "success",
        title: "Well Done!!👌",
        text: "Wonderful JOB!!",
      })
      // navigate("/login")
    } else {
      console.log("error occured")
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "search for error!!",
      })
    }
  }
  return (
    <div className="main">
      <div className="container contain mt-4 ">
        <h3 className="text-center">IssueTracker Form</h3>
        <h6 className="text-muted subheading ">Enter the details of the project so we can track the issues in an informative way</h6>
        <Formik
          initialValues={{
            title: "",
            type: "",
            org: currentUser.team ? currentUser.team.title : "",
            assignedTo: "",
            assignedBy: currentUser._id,
            
          }}
          onSubmit={userSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div class="row mb-2">
                <div className="form-outline boxes">
                  <label className="form-label" for="form6Example1">
                    Title
                  </label>

                  <TextField type="text" id="title" className="form-control" onChange={handleChange} value={values.title} />
                </div>

                <div className="form-outline boxes">
                  <label className="form-label" for="form6Example2">
                    Description
                  </label>
                  <textarea rows="3" id="type" className="form-control" onChange={handleChange} value={values.type}></textarea>
                </div>
              </div>

              {/* <!-- Text input --> */}
              <div className="form-outline  boxes">
                <label className="form-label" for="form6Example3">
                  Organisation
                </label>
                <TextField type="text" id="org" className="form-control" onChange={handleChange} value={values.org} />
              </div>

              {/* <!-- Text input --> */}
              <div className="form-outline  boxes">
                <label className="form-label" for="form6Example4">
                  Assigned To
                </label>
                <TextField type="text" id="assignedTo" className="form-control" onChange={handleChange} value={values.assignedTo} />
              </div>


              <div className="text-center  mt-4">
                <button className="btn btn-primary w-100" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddIssue1
