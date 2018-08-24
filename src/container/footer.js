import React from "react";
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import '.././App.css';

const Footer = () => (
    <div>

        <footer className="page-footer font-small unique-color-dark">

            <div className="colorGeral">
                <div className="container">


                    <div className="row py-4 d-flex align-items-center">


                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>

                        <div className="col-md-6 col-lg-7 text-center text-md-right">


                            <a className="fb-ic">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>

                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                            </a>

                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                            </a>

                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>

                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text"> </i>
                            </a>

                        </div>


                    </div>


                </div>
            </div>


            <div className="container text-center text-md-left mt-5">


                <div className="row mt-3">


                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                     
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                       
                        <p>
                            <a href="#!">MDBootstrap</a>
                        </p>
                        <p>
                            <a href="#!">MDWordPress</a>
                        </p>
                        <p>
                            <a href="#!">BrandFlow</a>
                        </p>
                        <p>
                            <a href="#!">Bootstrap Angular</a>
                        </p>

                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                      
                        <p>
                            <a href="#!">Your Account</a>
                        </p>
                        <p>
                            <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                            <a href="#!">Help</a>
                        </p>

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                     
                        <p>
                            <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fa fa-envelope mr-3"></i> info@example.com</p>
                        <p>
                            <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p>
                            <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>

                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>


        </footer>

    </div>

);

export default Footer;