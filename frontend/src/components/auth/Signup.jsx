import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
   


  export function SimpleRegistrationForm() {

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    });
    const [userinfo, setUserinfo] = useState(null);

    

   // const [userinfo , setUserinfo]=useState([]);

    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});

       
    };

    const handleSubmit =(e)=>{

      
        e.preventDefault();
        
        setUserinfo(user);
        console.log(userinfo)
      
    }



   


    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        {/* <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography> */}
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="username"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={user.username}
              onChange={handlechange}


              
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={user.email}
              onChange={handlechange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={user.password}
              onChange={handlechange}
            />
          </div>
          <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Signup as company
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
          
          <Button className="mt-6" fullWidth type="submit">
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/signin" className="font-medium text-red-800" >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }


  export default SimpleRegistrationForm;