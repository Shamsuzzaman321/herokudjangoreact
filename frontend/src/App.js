import React from "react";
import logo from "./logo.svg";
import test from "./test.png";
import { Button } from 'react-bootstrap'
import makeschool from "./makeschool.png"
import dip from "./dip.jpg"
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <h1>Hello, World frontend এর জন্য react js এবং backend এর জন্য django/rest ফ্রেমওয়ার্ক কে heroku webserver এ deployment করা হলো </h1>
      <h2>সামনের দিকে আমরা আরও details আলোচনা+পরীক্ষা করবো==>created by দীপ </h2>
      <img src="https://gifimage.net/wp-content/uploads/2018/11/goku-ui-gif-5.gif" />
      <p>হেরোকু তে frontend backend deployment করার জন্য django সাধারণ যে নিয়মে করতে হয় সেইভাবেই করতে হবে pip install gunicorn/whitenoise etc+settings.py এ import করতে হবে +static/templatedirectory লোকেশন দেখায়দিতে হবে etc etc but heroku তে deployment করার আগে heroku তে webpack install/add করতে হবে cli দ্বারা অথবা heroku dashboard এ settings এর webpack দ্বারা </p>
      <img src={logo} className="testing" alt="Logo" />
      <br></br>
      <hr></hr>
      <h2>Test Imageeee</h2>
      <img src={makeschool} alt="TEST image" />
      <h2>is the pic working as static file of heroku????????</h2>
      <img src={dip} alt="TEST image" width="800" height="500" />
      <h1>is the pic working as static file of heroku????????</h1>
      

      <hr></hr>
      <h2>Test Bootstrap Buttons</h2>
      <Button bsStyle="primary">Primary</Button>{' '}
      <Button type="button" class="btn btn-primary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <p>Welcome to  home on the web.</p>



      <button type="button" class="btn btn-primary">Primary BootStrap</button>
      
      <button type="button" class="btn btn-secondary">Secondary Bootstap</button>
    
    </div>

  )
};

export default App;
