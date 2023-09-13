function Header() {
    return (
      <div className='header'>
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
        </div>
        <div className='search'>
          <div className='searchbox'>
            <input className='searchInput' type='text' />
            <button className='searchBtn'>search</button>
          </div>
          
        </div>
        <div className='profile'>
          <img src={process.env.PUBLIC_URL + '/images/profile.jpg'}/>
        </div>
      </div>
    )
  }
  export default Header;