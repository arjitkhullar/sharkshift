import styled, { css } from 'react-emotion';

// constants
const colors = {
  blackBorder: '#333333',
  blackBg: '#111111',
  whiteBg: '#edebd7',
  whiteText: '#fafafa',
  blackText: '#333333',
  red: '#ed6a5a',
  yellow: '#e3b23c',
};

// styled components
export const containerStyle = {
  padding: 0,
  margin: 0,
  '*': {
    padding: 0,
    margin: 0,
  },
};

export const App = styled('div')(() => ({
  backgroundColor: colors.blackBg,
  color: colors.whiteText,
  display: 'flex',
  flexDirection: 'row',
  flexBasis: '50%',
  fontSize: '16px',
}));

export const UserProfile = styled('div')(() => ({
  padding: '2em',
}));

export const GamerScore = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexBasis: '50%',
  '.score': {
    fontSize: '1em',
    color: colors.whiteText,
    spang: {
      color: colors.red,
      fontSize: '2em',
    },
  },
}));

// styles
const profileInfo = css({
  width: '100%',
  textAlign: 'center',
});

const pic = css({
  borderRadius: '50%',
  overflow: 'hidden',
  border: `10px solid ${colors.blackBorder}`,
  img: {
    height: 'auto',
    maxWidth: 100,
  },
});

export default {
  profileInfo,
  pic,
};
