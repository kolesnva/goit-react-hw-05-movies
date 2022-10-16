import LogoIMG from './../../logo.svg';
import { Logo, LogoWrap } from './FooterStyled';

export function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: '#494949',
      }}
    >
      <LogoWrap href="https://www.themoviedb.org/">
        <Logo src={LogoIMG} height={24} />
      </LogoWrap>
    </footer>
  );
}
