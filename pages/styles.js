import styled, { css } from 'react-emotion'

const pgLogin = css({
  display: 'flex',
  flexDirection: 'row',
  height: 'calc(100vh - 16px)',
  '.left': {
    flex: 1,
    background:
      'url(\'https://firebasestorage.googleapis.com/v0/b/norblock-c98d8.appspot.com/o/login_bg.png?alt=media&token=3efc4c3f-6819-4c6f-a04f-f57e379910c0\')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginRight: '4px'
  },
  '.right': {
    flex: 1,
    background: '#222',
    color: 'white',
    marginLeft: '4px',
    display: 'flex',
    alignItems: 'center',
    '.inner': {
      paddingLeft: '2.5em',
      fontFamily: 'sans-serif',
      fontWeight: '100',
      '.logo': {
        fontSize: '40px',
        marginBottom: '10px',
        marginTop: '10px'
      },
      '.btns': {
        marginTop: '2em',
        button: {
          background: 'none',
          color: 'white',
          marginRight: '10px',
          padding: '5px 20px',
          fontSize: '14px',
          fontWeight: '100',
          borderRadius: '5px'
        }
      }
    }
  }
})

export default {
  pgLogin
}
