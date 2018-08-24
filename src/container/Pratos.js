import React from "react";
import '.././App.css';

const Pratos = () => (
    
    <div className="jumbotron"  >
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>

            <p className="text-center dark-grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


            <div className="row">

                <div className="col-lg-5 col-xl-4">


                    <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                </div>



                <div className="col-lg-7 col-xl-8">


                    <h3 className="font-weight-bold mb-3"><strong>Title of the news</strong></h3>

                    <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis cum soluta nobis est eligendi placeat facere aut rerum.</p>

                    <p>by <a className="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>

                    <a className="btn btn-primary btn-md">Read more</a>

                </div>


            </div>


            <hr className="my-5" />


            <div className="row">


                <div className="col-lg-5 col-xl-4">


                    <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" alt="Sample image" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                </div>



                <div className="col-lg-7 col-xl-8">


                    <h3 className="font-weight-bold mb-3"><strong>Title of the news</strong></h3>

                    <p className="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos et dolorum fuga.</p>

                    <p>by <a className="font-weight-bold">Jessica Clark</a>, 16/04/2018</p>

                    <a className="btn btn-primary btn-md">Read more</a>

                </div>


            </div>


            <hr className="my-5" />


            <div className="row">

                <div className="col-lg-5 col-xl-4">


                    <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" alt="Sample image" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                </div>


                <div className="col-lg-7 col-xl-8">


                    <h3 className="font-weight-bold mb-3"><strong>Title of the news</strong></h3>

                    <p className="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, psam voluptatem quia consectetur.</p>

                    <p>by <a className="font-weight-bold">Jessica Clark</a>, 12/04/2018</p>

                    <a className="btn btn-primary btn-md">Read more</a>

                </div>


            </div>
        </section>
    </div>


)

export default Pratos;