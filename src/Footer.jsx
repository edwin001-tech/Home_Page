import React from 'react';
import './Home.css'

function Footer (){
    return(
        	<div class="row">
    	<div class="col-md-12">
    	    <div className="container-fluid footer">				
		<div className="footer">
			<div class='row'>
		
				
				<div class="col-md-4 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Links
					</div>	
					
					<div class="footer-links">
						 <a href="#"> Terms and Conditions</a>
                    <a href="#"> Privacy</a>
                    <a href="#"> Cookie policy </a>
					</div>
				</div>
				<div class="col-md-4 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Our newsletter
					</div>	
					<div class="footer-links">
						<div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email"/>
                            <span class="input-group-btn">
         <button class="btn btn-theme" type="submit">Subscribe</button>
         </span>
                        </div>
					</div>
				</div>
				<div class="col-md-4 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Follow us
					</div>	
					<div class="footer-links">
						Find us on social media
					</div>

					<div class="footer-social-links m-t-30">
						<ul>
						<li>
							 <a href="#"> <i class="fab fa-facebook"></i> </a>
                                    <a href="#"> <i class="fab fa-twitter"></i> </a>
                                    <a href="#"> <i class="fab fa-linkedin"></i> </a>
                                    <a href="#"> <i class="fab fa-youtube"></i> </a>
						
						</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	
	<div class="footer-bottom">
		The Gaming Zoo © 2020
	</div>
    	</div>
	</div>
	</div>
			

    );
}
export default Footer;