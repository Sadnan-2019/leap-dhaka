import React from 'react';
import Marquee from 'react-fast-marquee';

const MedicalCondition = () => {
    return (
        <div>
            <div className=" ">
        <h2 className="  text-center   font-bold poppins-b lg:text-4xl  " style={{ color: "#453364" }}>
        We Treat the following Medical Conditions:
        </h2>
        
      </div>
      <Marquee  gradientColor={false} speed={30} gradient={false} play={true}>
        <div className="  	  "style={{ backgroundColor: " red", borderColor: "#F5F1EA" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className="	     " style={{  borderColor: "#F5F1EA",width:"100px" }}
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        <div className="  	 	  " style={{ backgroundColor: "#F5F1EA", borderColor: "#F5F1EA" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className="	     " style={{  borderColor: "#F5F1EA",width:"100px" }}
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        <div className="  	 	  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className="	     " style={{  borderColor: "#F5F1EA",width:"100px" }}
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        <div className="  	 	  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className="	     " style={{  borderColor: "#F5F1EA",width:"100px" }}
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        {/* <div className="  	 	  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className=" w-25 "
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        <div className="  	 	  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className=" w-25 "
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        <div className="  	 	  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className=" w-25 "
          />
          <p className='text-bold '>Arthritis</p>
        </div>
        <div className="  	 	  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4200/4200743.png"
            alt="Shoes"
            className=" w-25 "
          />
          <p className='text-bold '>Arthritis</p>
        </div> */}
      
      

      </Marquee>
        </div>
    );
};

export default MedicalCondition;