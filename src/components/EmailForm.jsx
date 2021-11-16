import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container } from "react-bootstrap";

const EmailForm = ({ header, subheader, extraInfo }) => {
  return (
    <form name="contact" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <input type="email" id="email" name="email" required />

      <input type="submit" value="Reach us" />
    </form>
  );
};

EmailForm.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

EmailForm.defaultProps = {
  header: "",
  subheader: "",
  extraInfo: null,
};

export default EmailForm;
