import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cardsContainer">
      <div className="card">
        <b>Glasgow</b>
        <img
          src="https://i2-prod.glasgowlive.co.uk/incoming/article18629495.ece/ALTERNATES/s1200c/0_JS211174459.jpg"
          alt="glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <b>Manchester</b>
        <img
          src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/12/05/20062958-1741-11ea-9462-4dd25a5b0420_image_hires_193520.jpg?itok=bILHHWDW&v=1575545728"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/ " className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <b>London</b>
        <img
          src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
