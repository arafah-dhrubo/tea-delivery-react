import React from 'react'

const Offers = () => {
    return (
        <div className="py-5 bg-light">
            <h3>Special Offers</h3>
            <div className="container mt-3 mx-auto row row-cols-1 row-cols-md-2 d-flex justify-content-between align-items-center g-4">
                <div className="col">
                    <div className="bg-yellow-100 rounded-xl hover:shadow-lg">
                        <div className=" d-flex justify-content-between text-start items-center">
                            <div className="w-50 pl-5"><h6 className="text-danger">SAVE 30%</h6>
                                <h4>Herb Combo</h4>
                                <p>Sides and drinks at a slashed price</p>
                                <button className="btn btn-warning fw-bold">Order Now</button>
                          
                            </div>
                            <div className="w-50">
                                <img src="https://cdn.dribbble.com/users/1098915/screenshots/9740364/media/5f3a7436999a9f9b926bc8b9f48de2b6.png?compress=1&resize=400x300" className="img-fluid rounded-xl" alt="herb combo" />
                            </div>
                        </div>
                        </div>
                </div>
                <div className="col">
                    <div className="bg-red-100 rounded-xl">
                        <div className=" d-flex justify-content-between text-start items-center">
                            <div className="w-50 pl-5"><h6 className="text-danger">CRISPY</h6>
                                <h4>Buy Four Get One</h4>
                                <p>Save the classic drinks on fixed price</p>
                                <button className="btn btn-danger fw-bold">Order Now</button>
                            </div>
                            <div className="w-50">
                                <img src="https://cdn.dribbble.com/users/175204/screenshots/9182325/media/15a3a3c8e9edb800a4b9535328a39662.png?compress=1&resize=400x300" className="img-fluid rounded-xl" alt="burger combo" />
                            </div>
                        </div>
                    
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Offers
