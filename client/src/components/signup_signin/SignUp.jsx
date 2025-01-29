import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    try {
      const res = await fetch("http://localhost:3005/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          mobile,
          password,
          cpassword,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        toast.error("Invalid Details 👎!", {
          position: "top-center",
        });
      } else {
        setUdata({
          fname: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        });

        toast.success("Registration Successfully Done 😃!", {
          position: "top-center",
        });

        // Redirect to login page after 1.5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.log("Signup Error: " + error.message);
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>Create account</h1>
              <div className="form_data">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  name="fname"
                  onChange={adddata}
                  value={udata.fname}
                  id="name"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={adddata}
                  value={udata.email}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="number"
                  name="mobile"
                  onChange={adddata}
                  value={udata.mobile}
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={adddata}
                  value={udata.password}
                  id="password"
                  placeholder="At least 6 characters"
                />
              </div>
              <div className="form_data">
                <label htmlFor="passwordg">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  onChange={adddata}
                  value={udata.cpassword}
                  id="passwordg"
                />
              </div>
              <button type="submit" className="signin_btn" onClick={senddata}>
                Continue
              </button>

              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign in</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SignUp;
