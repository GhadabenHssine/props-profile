import React from 'react'
import img from "../../src/img/83886781_569987830398455_425970406831161344_n.jpg"
import PropTypes from 'prop-types';
import "../App.css"
const profile = ({ fullName, bio, profession }) => {
    const handleName = e => {
        e.preventDefault();
        alert("Ghada ben Hssine");
    };
    return (
        <div>
            <nav>
                <div className='logo'>Folio <b>.</b></div>
                <ul className='navItems'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skils</a></li>


                </ul>
                <div className='links'>
                    <a href="https://github.com/GhadabenHssine">  <i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ghada-ben-hssine-7a5372242">   <i className="fa-brands fa-linkedin"></i></a>


                </div>

            </nav>
            <div className="bloc">
                <div >
                    <p style={{ fontSize: "25px", color: "#0e3746" }}>
                        Hello my name is <span style={{ color: "#be2623", fontWeight: "bold" }}>{fullName}</span> </p>

                    <p style={{ color: "#000", fontSize: "25px", color: "#0e3746" }}> I'm
                        <span style={{ marginLeft: "5px", color: "#be2623", fontWeight: "bold" }}>{profession}</span>
                    </p>
                    <p style={{ color: "#000", fontSize: "25px", color: "#0e3746" }}> {bio}</p>
                </div>
                <img src={img} alt="ghada" style={{ width: "300px", height: "300px", marginLeft: "20px" }}
                    onClick={handleName} />
            </div>

        </div >
    )
}

profile.defaultProps = {
    fullName: "folane ben folan",
    bio: " ******",
    profession: "ydez fi ri7 lil mrakeb"
};
profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
export default profile