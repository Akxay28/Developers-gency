import React from 'react'
import Header from '../../Layout/Header/Header'
import BatmanBtn from '../../Layout/Component/BatmanBtn/BatmanBtn'
import Lanyard from '../../Layout/Component/Lanyard/Lanyard'

const Section1 = () => {
    return (
        <>
            <section className='section1'>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                        </div>
                        <div className="col-lg-6 ">
                            <div className="container mt-0 mt-lg-5 py-0 py-lg-5">
                                <p className='text-center fs-1' style={{ color: "black" }}>We design. We develop.</p>
                                <p className='text-center display-1 fw-bolder boldText'>We deliver your vision <br /> to the world</p>
                                <p className='text-center fs-3 ' style={{ color: "black" }}>Explore our work and discover your potential.</p>
                                <p className='text-center'>
                                    <BatmanBtn text={"Show Me The Magic"} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1