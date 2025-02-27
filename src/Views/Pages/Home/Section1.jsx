import React from 'react';
import BatmanBtn from '../../Layout/Component/BatmanBtn/BatmanBtn';
import FallingText from '../../Layout/Component/FallingText/FallingText';
import Lanyard from '../../Layout/Component/Lanyard/Lanyard';
import Header from '../../Layout/Header/Header';
import { motion } from 'framer-motion';

const Section1 = () => {
    // <motion.div animate={{ x: 0 }} />

    return (

        <>
            <motion.section className='section1 bg-fixed sticky'>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 overlay">
                            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                        </div>
                        <div className="col-lg-6 text-center ">
                            {/* <div className="container mt-0 mt-lg-3 py-0 py-lg-5">
                                <div className='text-center mb-5 align-items-center d-flex justify-content-center fs-4' data-aos="fade-up" data-aos-duration="1000" >Drag & arrange it your way
                                    <img src="firebaseicon.gif" className='ms-3 img-fluid' width={70} height={70} alt="" />
                                </div>
                                <DragItems />
                            </div> */}

                            {/* <p className='text-center fs-1' style={{ color: "black" }}>We design. We develop.</p>
                                <p className='text-center display-1 fw-bolder boldText'>We deliver your vision <br /> to the world</p>
                                <p className='text-center fs-3 ' style={{ color: "black" }}>Explore our work and discover your potential.</p>
                                <p className='text-center'>
                                    <BatmanBtn text={"Show Me The Magic"} />
                            </p> */}

                            <FallingText
                                text={`We Design. We Develop. We Deliver your Vision to the World`}
                                highlightWords={["Design", "Develop", "Deliver", "Vision", "Work"]}
                                highlightClass="highlighted"
                                trigger="hover"
                                backgroundColor="transparent"
                                wireframes={false}
                                gravity={0.2}
                                fontSize="3.5rem"
                                mouseConstraintStiffness={0.9}
                            />
                            <BatmanBtn text={"Show Me The Magic"} />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Section1