import React from 'react'
import './Home.css'

function Content(){
    return(
     	
			<div className="container-fluid container-body">
		
            <h1>YOUR OWN PC YOUR OWN RULES.</h1>
            <div class="row">
              <div class="col-md-4">
                <div class="thumbnail">
           
                  <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/3sJhS41/motherboard.jpg"  alt="Motherboard"/> 
                          
                    <div class="caption">
                      <p class="text-center">Get the best components.</p>
                    </div>
                  
                </div>
              </div>
              <div class="col-md-4">
                <div class="thumbnail">
                  <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/zVyvY6k/pc.jpg" alt="Pc"/>
                    <div class="caption">
                      <p class="text-center">Build strong gaming pc.</p>
                    </div>
                 
                </div>
              </div>
              <div class="col-md-4">
                <div class="thumbnail">
                 
                     <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/w7LL5WQ/gaming.jpg" alt="Gaming"/>
                    <div class="caption">
                      <p class="text-center">Enjoy the full experience.</p>
                    </div>
                 
                </div>
              </div>
            </div>
                          
          
                      <div class="container container-body"/>
                  
            <h2>HOW TO START?</h2>
            <div class="row">
              <div class="col-md-4">
                <div class="thumbnail">
           
                  <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/6F3J9GR/find.png"  alt="find"/> 
                          
                    <div class="caption">
                      <p class="text-center">Find your hardware</p>
                    </div>
                  
                </div>
              </div>
              <div class="col-md-4">
                <div class="thumbnail">
                  <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/Fn0fGQj/buy.png" alt="buy"/>
                    <div class="caption">
                      <p class="text-center">Buy desired products</p>
                    </div>
                 
                </div>
              </div>
              <div class="col-md-4">
                <div class="thumbnail">
                 
                     <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/64HKhK7/deliver.png" alt="deliver"/>
                    <div class="caption">
                      <p class="text-center">Get your goods delivered.</p>
                    </div>
                    
                     <div class="thumbnail">
                 
                     <img class="img-responsive img-thumbnail bodyphoto" src="https://i.ibb.co/FWSqDxR/comp.png" alt="deliver"/>
                    <div class="caption">
                      <p class="text-center">Enjoy your game.</p>
                    </div>
                 
                </div>
              </div>
            </div>
                          </div>
                   
          
                      <h3>DONT WANT TO LOSE YOUR PREVIOUS ORDERS? JOIN US!</h3>
                          
           <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-9 mx-auto">
                  <div class="card card-signin flex-row my-5">
                    <div class="card-img-left d-none d-md-flex">
                       
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-center">Register</h5>
                      <div className="form-signin">
                        <div class="form-label-group">
                          <input type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus/>
                          <label for="inputUserame">Username</label>
                        </div>
          
                        <div class="form-label-group">
                          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                          <label for="inputEmail">Email address</label>
                        </div>
                        
                        <hr></hr>
          
                        <div class="form-label-group">
                          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                          <label for="inputPassword">Password</label>
                        </div>
                        
                        <div class="form-label-group">
                          <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                          <label for="inputConfirmPassword">Confirm password</label>
                        </div>
          
                        <div class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register </div>
                        <a class="d-block text-center mt-2 small" href="#">Sign In</a>
                        <hr class="my-4"></hr>
                        <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign up with Google</button>
                        <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    
          
                  
                          
                 
                          </div>
                      
                      <div>
            
                      </div>
          
              
                      </div>   
    )
}
export default Content;