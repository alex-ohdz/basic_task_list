import React from 'react';
import feather from 'feather-icons';

const FeatherIcon = ({ icon, ...props }) => {
  const iconMarkup = feather.icons[icon].toSvg();

  return (
    <span
      className="feather-icon"
      {...props}
      dangerouslySetInnerHTML={{ __html: iconMarkup }}
    />
  );
};

export default FeatherIcon;
