import React from 'react';
import './App.css';
import './Home.css';

function Home() {
  return (
    <div className="Home">
     < nav class="navbar navbar-expand-lg static-top">
  <div className="container-fluid">
    <a className="navbar-brand mx-5" href="#">
          <img className="img-responsive" src="https://i.ibb.co/SsyDcRd/logo.jpg" alt=""/>
        </a>
    <button class="navbar-toggler navbar-light mx-5" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-4 px-4">
        <li class="nav-item active ">
          <a class="nav-link" href="#">HOME
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">PRODUCT PAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT US</a>
			</li>
		  
		 <li class="nav-item">
			 <a class="nav-link" href="#"><span class="glyphicon glyphicon-user"></span>SIGN UP</a>
		  </li>
		  
	   <li class="nav-item">
		   <a class="nav-link" href="#"><span class="glyphicon glyphicon-log-in"></span> LOGIN</a></li>
   
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Home;
