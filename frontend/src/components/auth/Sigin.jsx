import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
   
  export function Sigin() {

    const [userinfo,SetuserInfo]=useState({
        username:'',
        password:''
    });


    const [info , setInfo]=useState([]);


    const handlesubmit =(e)=>{
        e.preventDefault();
        setInfo(userinfo)
        
        
        
    }

    const handlechange=(e)=>{
        SetuserInfo({...userinfo,[e.target.name]:e.target.value})
        
        

    }

    console.log(info);
    
    










    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
         Sign In
        </Typography>
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handlesubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="username"
              value={userinfo.username}
              onChange={handlechange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="password"
              value={userinfo.password}
              onChange={handlechange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button className="mt-6" fullWidth type="submit">
          Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Not have an account?{" "}
            <a href="/signup" className="font-medium text-red-700">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    );
  }


  export default Sigin;