import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container } from "react-bootstrap";
// import Image from "components/Image";
import "components/VideoCard.scss";
import Video from "../../content/assets/video/billboard.mp4";

const VideoCard = ({ className, imageAlt, header, subheader, extraInfo }) => {
  return (
    <div className="video-billboard">
      <video className="video-billboard__video" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="video-billboard__content">
        <div className="video-billboard__text-box container">
          <h3 className="video-billboard__subheading subheading">{header}</h3>
          <h2 className="video-billboard__title heading">
            Scaling carbon negative Bitcoin mining solutions
          </h2>
          {/* <h3 className="video-billboard__title">{header}</h3>
          <p className="video-billboard__text">Scaling carbon negative Bitcoin mining solutions</p> */}
        </div>
      </div>
    </div>

    // <Card className={clsx("image-card bg-dark text-white text-center", className)}>
    //   <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
    //   <Card.ImgOverlay className="no-padding">
    //     <Container>
    //       <div className="intro-text">
    //         <div className="intro-lead-in">{subheader}</div>
    //         <div className="intro-heading">{header}</div>
    //         {extraInfo}
    //       </div>
    //     </Container>
    //   </Card.ImgOverlay>
    // </Card>
  );
};

VideoCard.propTypes = {
  className: PropTypes.string,
  // imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

VideoCard.defaultProps = {
  className: null,
  // imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default VideoCard;
