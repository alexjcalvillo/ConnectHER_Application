const registrationPadding = (window) => {
  let paddingAmount = '20%';

  if (window.width < 576) {
    paddingAmount = '4%';
  } else if (window.width < 768) {
    paddingAmount = '5%';
  } else if (window.width < 1000) {
    paddingAmount = '10%';
  } else if (window.width < 1200) {
    paddingAmount = '15%';
  }

  const paddingObj = {
    paddingLeft: paddingAmount,
    paddingRight: paddingAmount,
  };
  return paddingObj;
};

export default registrationPadding;
