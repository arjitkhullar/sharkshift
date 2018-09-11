import styled, { css } from 'react-emotion';

// constants
const colors = {
  blackBorder: '#333333',
  blackBg: '#000',
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
  background:
    'url("https://firebasestorage.googleapis.com/v0/b/norblock-c98d8.appspot.com/o/constantin-popescu-596249-unsplash.jpg?alt=media&token=81050255-fadd-4eb0-8944-33dd5c4bbc9d") right top/100% no-repeat',
  backgroundColor: colors.blackBg,
  color: colors.whiteText,
  display: 'flex',
  flexDirection: 'row',
  fontSize: '16px',
  fontFamily: '"Lato", sans-serif',
  '*': {
    listStyle: 'none',
  },
}));

export const UserProfile = styled('div')(() => ({
  padding: '2em',
  width: '50%',
}));

export const GamerScore = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  '.score, .rating': {
    fontSize: '1em',
    width: '50%',
    color: colors.whiteText,
    span: {
      color: colors.red,
      fontSize: '2em',
      display: 'block',
    },
  },
}));

// styles
const profileInfo = css({
  width: '100%',
  textAlign: 'center',
});

const pic = css({
  borderRadius: 100,
  overflow: 'hidden',
  height: 100,
  width: 100,
  margin: 'auto',
  border: `10px solid ${colors.blackBorder}`,
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
});

const leaderboard = css({
  width: '50%',
  padding: '2em',
  background: 'rgba(255, 255, 255, 0.1)',
});

const achievements = css({
  display: 'block',
});

const gameName = css({
  display: 'block',
});

export default {
  profileInfo,
  pic,
  leaderboard,
  achievements,
  gameName,
};
