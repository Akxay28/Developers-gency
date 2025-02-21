import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';

const Header = () => {
    const modalContentRef1 = useRef(null);
    const modalContentRef2 = useRef(null);
    const modalContentRef3 = useRef(null);
    const modalContentRef4 = useRef(null);
    const modalContentRef5 = useRef(null);
    const modalContentRef6 = useRef(null);
    const modalContentRef7 = useRef(null);

    useEffect(() => {
        const modalElement = document.getElementById("exampleModal");

        const handleModalShow = () => {

            gsap.fromTo(modalContentRef1.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1, // duration for smoothness
                    ease: "power2.out", // smoother ease
                }
            );

            gsap.fromTo(modalContentRef2.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.2, // slight delay to stagger the animations
                    ease: "power2.out",
                }
            );

            gsap.fromTo(modalContentRef3.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.4, // slight delay to stagger the animations
                    ease: "power2.out",
                }
            );

            gsap.fromTo(modalContentRef4.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.6, // slight delay to stagger the animations
                    ease: "power2.out",
                }
            );

            gsap.fromTo(modalContentRef5.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.8, // slight delay to stagger the animations
                    ease: "power2.out",
                }
            );
            gsap.fromTo(modalContentRef6.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.8, // slight delay to stagger the animations
                    ease: "power2.out",
                }
            );
            gsap.fromTo(modalContentRef7.current.children,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: 0.8, // slight delay to stagger the animations
                    ease: "power2.out",
                }
            );
        }

        modalElement.addEventListener('show.bs.modal', handleModalShow);

        // return () => {
        //     modalElement.removeEventListener('show.bs.modal', handleModalShow);
        // }
    }, []);

    return (
        <>
            <div className="container">
                <div className="row header">
                    <div className="d-grid mx-auto col-8 align-items-center d-flex justify-content-between bg-dark text-white mt-5 rounded-pill">
                        <p className='fs-4 ms-3 mt-2'>Header</p>
                        <i className="fa-solid fa-bars me-3 fs-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    </div>

                    {/* <div className="modal fade mt-5 py-4" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog mt-5 py-5">
                            <div className="modal-content bg-dark text-white rounded-5">
                                <div className="modal-body">
                                    <div className="modal-footer border-0 pe-auto">
                                        <i className="fa-solid fa-xmark" data-bs-dismiss="modal" style={{ cursor: "pointer" }}></i>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-lg-5 columnGsap mt-3" ref={modalContentRef1}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase'>Home</p>
                                                <img src="cleaning.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 columnGsap mt-3" ref={modalContentRef2}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase'>About</p>
                                                <img src="info.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 columnGsap mt-3" ref={modalContentRef3}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase'>Contacts</p>
                                                <img src="communicate.png" className="img-fluid" width={"70px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 columnGsap mt-3" ref={modalContentRef4}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase'>Works</p>
                                                <img src="teamwork.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 columnGsap mt-3" ref={modalContentRef5}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase'>Plans</p>
                                                <img src="benefits.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 columnGsap mt-3" ref={modalContentRef6}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase mt-1'>Careers</p>
                                                <img src="career.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 columnGsap mt-3" ref={modalContentRef7}>
                                            <div className="container text-dark d-flex justify-content-between align-items-center py-3 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase'>Our Team</p>
                                                <img src="support.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="modal fade mt-5 py-4" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog mt-5 py-5">
                            <div className="modal-content bg-dark text-white rounded-5">
                                <div className="modal-body">
                                    <div className="modal-footer border-0 pe-auto">
                                        <i className="fa-solid fa-xmark" data-bs-dismiss="modal" style={{ cursor: "pointer" }}></i>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-lg-4 columnGsap mt-3" ref={modalContentRef1}>
                                            <div className="  container text-dark d-flex justify-content-center align-items-center py-3 childNavContent">
                                                {/* <p className='display-6 fw-bold text-uppercase'>Home</p> */}
                                                <img src="homeChange.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 columnGsap mt-3" ref={modalContentRef2}>
                                            <div className="container text-dark d-flex justify-content-center align-items-center py-3 childNavContent">
                                                {/* <p className='display-6 fw-bold text-uppercase'>About</p> */}
                                                <img src="info.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 columnGsap mt-3" ref={modalContentRef3}>
                                            <div className="container text-dark d-flex justify-content-center align-items-center py-3 childNavContent">
                                                {/* <p className='display-6 fw-bold text-uppercase'>Contacts</p> */}
                                                <img src="communicate.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 columnGsap mt-3" ref={modalContentRef4}>
                                            <div className="container text-dark d-flex justify-content-center align-items-center py-3 childNavContent">
                                                {/* <p className='display-6 fw-bold text-uppercase'>Works</p> */}
                                                <img src="businessinblack.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 columnGsap mt-3" ref={modalContentRef5}>
                                            <div className="container text-dark d-flex justify-content-center align-items-center py-3 childNavContent">
                                                {/* <p className='display-6 fw-bold text-uppercase'>Plans</p> */}
                                                <img src="benefits.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 columnGsap mt-3" ref={modalContentRef6}>
                                            <div className="container text-dark d-flex justify-content-center align-items-center py-3 childNavContent">
                                                {/* <p className='display-6 fw-bold text-uppercase mt-1'>Careers</p> */}
                                                <img src="career.png" className="img-fluid" width={"50px"} alt="" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 columnGsap mt-3" ref={modalContentRef7}>
                                            <div className="container text-dark d-flex justify-content-center align-items-center py-1 childNavContent">
                                                <p className='display-6 fw-bold text-uppercase me-4 mt-3'>Our </p>
                                                <img src="support.png" className="img-fluid me-4" width={"50px"} alt="" />
                                                <p className='display-6 fw-bold text-uppercase  mt-3'>Team</p>

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
    );
}

export default Header;
