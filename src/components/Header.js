const Header = ({ user }) => {
  return (
    <header>
      <div>Simple Blog</div>
      <div id="profile-pic">
        {user && <img src={user.url} alt="profile picture" />}
      </div>
    </header>
  );
};

export default Header;
