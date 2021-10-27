import React from 'react'

const MenuCard = ({ menuData }) => {

    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {
                    return (
                        <>
                            <div className="card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">1</span>
                                        <span className="card-author subtle">Breakfast</span>
                                        <h2 className="card-title"> Maggi</h2>
                                        <span className="card-description subtle">
                                            I love Maggi Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde iusto voluptatibus natus aperiam dolorum?
                                        </span>
                                        <div className="card-red">Read</div>
                                    </div>
                                    {/* <img src={image} alt="images" className="card-media" /> */}

                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard
