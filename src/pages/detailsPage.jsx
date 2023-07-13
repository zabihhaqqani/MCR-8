import React, { useState } from "react";
import { useParams } from "react-router-dom/dist";
import { data } from "../data";
import "./detailsPage.css";
import RsvpModal from "../components/rsvpModal/rsvpModal";
import { useDataContext } from "../components/context/context";
import moment from "moment";

function Page() {
  const { id } = useParams();
  const { modal, setModal } = useDataContext();
  const meetupDetails = data?.meetups?.find((event) => event?.id === id);

  const {
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = meetupDetails;

  const [paid, setIsPaid] = useState(isPaid);

  const openHandler = () => {
    setModal(!modal);
    setIsPaid(!isPaid);
  };
  return (
    <div className="container">
      <div className="event-details-container">
        <h3>{title}</h3>
        <p>
          Hosted By: <strong>{hostedBy}</strong>{" "}
        </p>
        <img width="300px" src={eventThumbnail} alt="img" />
        <p>
          <strong>Details</strong>:
        </p>
        <p>{eventDescription}</p>
        <p>
          <strong>Additional Information: </strong>
        </p>
        <p>
          <strong>Dress Code: </strong>
          {additionalInformation?.dressCode}
        </p>
        <strong>Age Restrictions: </strong>
        <p>{additionalInformation?.ageRestrictions}</p>
        <h4>Event Tags:</h4>
        {eventTags?.map((tag, index) => (
          <p className="pills" key={index}>
            {tag}
          </p>
        ))}
      </div>
      <div className="side-container">
        <p>{moment(eventStartTime).format("MMMM Do YYYY, h:mm:ss a")}</p> to{" "}
        <p>{moment(eventEndTime).format("MMMM Do YYYY, h:mm:ss a")}</p>
        <p>{location}</p>
        <p>{address}</p>
        <p>₹{price}</p>
        <h3>Speakers</h3>
        <div>
          {speakers?.map((data, index) => (
            <div key={index}>
              <img className="img" width="80px" height="80px" src={data?.image} alt="img" />
              <p>{data?.name}</p>
              <p>{data?.designation}</p>
            </div>
          ))}
        <button
          onClick={() => setModal(!modal)}
          className="save-button"
          disabled={paid ? true : false}
        >
          {isPaid ? "Already RSVPED" : "RSVP"}
        </button>
        </div>
      </div>
      {modal && <RsvpModal isOpen={openHandler} />}
    </div>
  );
}

export default Page;
