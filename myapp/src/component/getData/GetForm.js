import React, { useEffect } from "react";
import "./GetForm.css";
import DefaultPhoto from "./images.png";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function GetForm() {
  const [content, setContent] = React.useState([]);

  // const deletePost = async (id) => {
  //   let res = await fetch(`http://localhost:5000/delete/${id}`, {
  //     method: "Delete",
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  // const deleteContent = (userId) => {
  //   let answer = window.confirm("Are You Want To Delete");
  //   if (answer) {
  //     deletePost(userId);
  //   }
  // }; 

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/get`, {
          method: "get",
        });
        const responce = await res.json();
        setContent(responce);

        console.log("here");
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    };
    return getData;
  }, []);

  return (
    console.log("Heerre"),
    (
      <div className="get-form">
        {!content ? (
          <h2>Loding</h2>
        ) : (
          content.map((contents) => {
            let imgUrl = contents.photo
              ? `http://localhost:5000/photo/${
                  contents._id
                }?${new Date().getTime()}`
              : DefaultPhoto;
            console.log(imgUrl);
            console.log("fuck");
            return (
              <MDBCard className="card" key={contents._id}>
                <MDBCardImage
                  src={imgUrl}
                  alt={contents.name}
                  style={{ height: "300px", width: "100%", objectFit: "cover" }}
                />
                <MDBCardBody>
                  <MDBCardTitle>{contents.name}</MDBCardTitle>
                  <MDBCardText>{contents.email}</MDBCardText>

                  <Link
                    className="btn btn-primary"
                    to={`edit/${contents._id}`}
                    state={{ ...contents }}
                  >
                    Edit
                  </Link>
                  <MDBBtn
                    className="btn btn-danger ms-3"
                    href="#"
                    // onClick={deleteContent(contents._id)}
                  >
                    Delete
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            );
          })
        )}
      </div>
    )
  );
}

export default GetForm;
