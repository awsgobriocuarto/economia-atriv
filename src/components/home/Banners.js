import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";

const apiURL =
  "https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=12cokqEPO0B7WZCds_4dV0Uigoe4r-SM7iCIxJuMgeAI&sheet=banners";

function Banners() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiURL)
      .then((res) => {
        setBanners(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(banners);

  if (loading) {
    return <Loading />;
  }

  if (banners.length === 0) {
    return "";
  }

  return (
    <div className="slides">
      <div id="carouselBanners" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={
                banner.id > 1 ? "carousel-item" : "carousel-item  active"
              }
            >
              <>
                {banner.link ? (
                  <a
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <>
                      <img src={banner.imageUrl} alt="banner" />
                    </>
                  </a>
                ) : (
                  <>
                    <img src={banner.imageUrl} alt="banner" />
                  </>
                )}
              </>
            </div>
          ))}
        </div>
        {banners.length > 1 ? (
          <>
            <a
              className="carousel-control-prev"
              href="#carouselBanners"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselBanners"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Banners;
