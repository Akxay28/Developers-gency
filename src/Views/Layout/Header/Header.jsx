import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container"  >
                <div className="row header">
                    <div className=" d-grid mx-auto col-8 align-items-center d-flex justify-content-between bg-dark text-white mt-5 rounded-pill">
                        <p className='fs-4 ms-3  mt-2 '>Header</p>
                        <i class="fa-solid fa-bars me-3 fs-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        {/* OffCanvas */}
                    </div>
                    <div class="modal fade mt-5 py-4 " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false">
                        <div class="modal-dialog mt-5 py-5">
                            <div class="modal-content bg-dark text-white rounded-5">
                                <div class="modal-body ">
                                    <div class="modal-footer border-0 pe-auto" >
                                        <i class="fa-solid fa-xmark" data-bs-dismiss="modal" style={{ cursor: "pointer" }}></i>
                                    </div>
                                    <div className="row p-3 ">
                                        <div className="col-lg-5 mt-3">
                                            <div className="container text-dark d-flex justify-content-between align-items-center  py-3 childNavContent" >
                                                <p className='display-6 fw-bold text-uppercase' >Home</p>
                                                <img src="cleaning.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 mt-3">
                                            <div className="container text-dark d-flex justify-content-between align-items-center  py-3 childNavContent" >
                                                <p className='display-6 fw-bold text-uppercase' >About</p>
                                                <img src="info.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7  mt-3">
                                            <div className="container text-dark d-flex justify-content-between align-items-center  py-3 childNavContent" >
                                                <p className='display-6 fw-bold text-uppercase' >Contacts</p>
                                                <img src="communicate.png" className="img-fluid" width={"70px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 mt-3  ">
                                            <div className="container text-dark d-flex justify-content-between align-items-center   py-3 childNavContent" >
                                                <p className='display-6 fw-bold text-uppercase' >Works</p>
                                                <img src="teamwork.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <div className="container text-dark d-flex justify-content-between align-items-center  py-3 childNavContent" >
                                                <p className='display-6 fw-bold text-uppercase' >Our Team</p>
                                                <img src="support.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header