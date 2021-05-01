import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      내이름은 ~ {name} <br />
      children 값은 {children} 입니다
      <br />
      좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

export default MyComponent;

MyComponent.defaultProps = {
  name: "이름없음",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
