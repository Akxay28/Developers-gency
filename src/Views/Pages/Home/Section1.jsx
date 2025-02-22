import React from 'react'
import Header from '../../Layout/Header/Header'
import BatmanBtn from '../../Layout/Component/BatmanBtn/BatmanBtn'

const Section1 = () => {
    return (
        <>
            <section className='section1'>
                <Header />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <p className='text-center fs-1 ' style={{ color: "black" }}>We design. We develop.</p>
                            <p className='text-center display-1 fw-bolder boldText'>We deliver your vision <br /> to the world</p>
                            <p className='text-center fs-3 ' style={{ color: "black" }}>Explore our work and discover your potential.</p>
                            <p className='text-center'>
                                <BatmanBtn text={"Show Me The Magic"} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1