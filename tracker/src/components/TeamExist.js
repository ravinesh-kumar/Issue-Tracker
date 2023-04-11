import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckTeam = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
      );
      console.log(currentUser);

      if (currentUser.team) {
        Swal.fire({
          icon: "info",
          title: "Oops!!",
          text: "You are already in a team",
        });
        return <Navigate to="/Issues" />;
      }

      return children;
}

export default CheckTeam;