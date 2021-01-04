const closedFade = {
  top: '0',
  left: '0',
  backgroundImage: 'linear-gradient(to bottom, transparent, #f2f2f2)',
  transition: 'all 0.3s 0.08s ease-in-out',
};

const openFade = {
  top: '0',
  left: '0',
  backgroundImage: 'none',
  transition: 'all 0.3s 0.08s ease-in-out',
};

const closedHeight = {
  maxHeight: '200px',
  position: 'relative',
  top: '0',
  bottom: '0',
  overflow: 'hidden',
  zIndex: '0',
  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
};

const openHeight = {
  maxHeight: '100%',
  position: 'relative',
  top: '0',
  overflow: 'hidden',
  zIndex: '999',
  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
};

const buttonClose = {
  position: 'relative',
  bottom: '13px',
  zIndex: '999',
  transition: 'position 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
};

const buttonOpen = {
  position: 'relative',
  bottom: '25px',
  zIndex: '999',
  transition: 'position 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
};

const member = {
  closedFade,
  openFade,
  closedHeight,
  openHeight,
  buttonClose,
  buttonOpen,
};

export default member;
