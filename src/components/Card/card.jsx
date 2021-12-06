import React, { useEffect, useState } from "react";
import "./card.css";
import ReactPlayer from "react-player";
import api from "./../../ApiClient/apiClient";
function Card({ el }) {
  // console.log(el.data[0].keywords);
  return (
    <div className="card">
      <div className="cardRow1">
        <div className="cardRow1--left">
          <img src={el.links && el.links[0].href} alt="" />
        </div>
        <div className="cardRow1--right">
          <div className="inforHolder">
            <span className="label">Title</span>
            <span className="value">{el.data[0].title}</span>
          </div>
          <div className="inforHolder">
            <span className="label">Location</span>
            <span className="value">{el.data[0].center}</span>
          </div>
          <div className="inforHolder">
            <span className="label">Date</span>
            <span className="value">
              {el.data[0].date_created.substr(0, 10)}
            </span>
          </div>
          <div className="inforHolder">
            <span className="label">Tags</span>

            {el.data[0].keywords &&
              el.data[0].keywords.map((el, key) => (
                <span key={key} className="tags">
                  {el}
                </span>
              ))}
            {/* <span className="tags">Game</span>
            // 
            <span className="tags">SKY SPACER</span> */}
          </div>
        </div>
      </div>
      <div className="cardRow2">
        <h3>Description</h3>
        <p>{el.data[0].description.substr(0, 150)}</p>
      </div>
      <div className="cardRow3">
        {/* <button
          type="button"
          class="btn btn-primary cardbtn"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Watch Video
        </button> */}
        <div className="cardbtn">Add to Favourties</div>
      </div>
      {/* <NewModel link={el.href} /> */}
    </div>
  );
}
const NewModel = ({ link }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  // console.log(link);
  const getApiData = async () => {
    const data = await api.getVideo(link);
    for (let i = 0; i < data.data.length; i++) {
      const t = data.data[i].split(".");
      if (t.includes("mp4")) {
        setUrl(data.data[i]);
        setLoading(false);
        // console.log(data.data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {loading ? (
              "Loading the video wait plz..."
            ) : (
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={url}
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
