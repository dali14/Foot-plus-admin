import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import withAdmin from "../../withAdmin";
import React, { useEffect, useState  } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import "./user.css";
  
  const User = (props) => {
    const params = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image , setImage] = useState("");
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [imagelink, setImagelink] = useState("");
    const [id, setId] = useState();
    const [imagepreview, setImagepreview] = useState(false)
    const notify = () => toast("user modifier avec succes");
    

    function handleOnChange(changeEvent) {
      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {
          setImageSrc(onLoadEvent.target.result);
          setUploadData(undefined);
      }

      reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for (const file of fileInput.files) {
        formData.append('file', file);
    }

    formData.append('upload_preset', 'foot-plus');

    const data = await fetch('https://api.cloudinary.com/v1_1/isetbizertepfe/image/upload', {
        method: 'POST',
        body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);

}

const handleSubmit = (e) => {
  e.preventDefault()


  fetch("http://localhost:3004/Users/UpdateUser/" + id,{
    method: 'put', headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({
      name: name,
      email: email,
      
    }
    )
  }
  )
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setName("")
      setEmail("")
      notify()
    });



}


const updateImage = () => {
  if (imagelink) {
      
      fetch("http://localhost:3004/Users/UpdateUser/" + id, {
          method: 'put',
          body: JSON.stringify({
              image: JSON.parse(imagelink),
          }),
          headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
          },
      })
          .then((res) => res.json())
          .then(res => {
              console.log(res);
              if(res.status = 200){
                  
              }
          });
  }
}


useEffect(() => {
  setId(props.user?._id);
  setName(props.user?.name)
  if (uploadData) {
    setImagelink(JSON.stringify(uploadData.secure_url))
  }
  setImagepreview(true)        
  console.log(imagelink)
}, [uploadData, imagelink, imageSrc])




    // const notify = () => toast("user modifier avec succes");

    

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton" onClick={()=>{localStorage.removeItem("token");window.location="/login"}}>Log Out</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={props.user?.image}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{props.user?.name}</span>
                
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{props.user?.name}</span>
                
              </div>
              <span className="userShowTitle">Create at</span>
              <div className="userShowInfo">
              
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{props.user?.createdAt}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
             
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{props.user?.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Tunis | TN</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="userUpdateInput"
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="exmpl@gmail.com"
                    className="userUpdateInput"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                
               
              </div>
              <div className="userUpdateRight">
                
                <button className="userUpdateButton" type="submit">Update</button>
                <ToastContainer />
               
              </div>
            </form>
          </div>

          <div className="userUpdate">
            <span className="userUpdateTitle">Edit Image </span>




            <form className="userUpdateForm" method="post"  onChange={handleOnChange} onSubmit={handleOnSubmit}>
             
              <div className="userUpdateRight">

                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={props.user?.image}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>

                  <input type="file" id="file" name="file" style={{ display: "none" }} />
                  <img src={imageSrc} />
                </div>

                {imageSrc && !uploadData && (

                <button className="userUpdateButton" type="submit">uplode Image</button>

                        )}
                        <br></br>
                        <button onClick={() => { updateImage() }} className="userUpdateButton">
                        Modifier  
                    </button>
                {/* <ToastContainer /> */}
              </div>
              
            </form>

            



          </div>
        </div>
      </div>
    );
  }
  export default withAdmin(User);