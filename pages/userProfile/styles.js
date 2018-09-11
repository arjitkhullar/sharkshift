import styled, { css } from 'react-emotion';

// constants
const colors = {
  blackBorder: '#333333',
  blackBg: '#000',
  whiteBg: '#edebd7',
  whiteText: '#fafafa',
  blackText: '#333333',
  blue: '#47a8e5',
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
    'url("https://firebasestorage.googleapis.com/v0/b/norblock-c98d8.appspot.com/o/Screen%20Shot%202018-09-11%20at%206.12.37%20PM.png?alt=media&token=7228b949-39df-4922-8afe-b7f9e5aa13ab") right top/100% no-repeat',
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
      color: colors.blue,
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
  li: {
    borderBottom: `1px solid ${colors.whiteBg}`,
    padding: '0.5em 0',
    marginBottom: '0.5em',
  },
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
