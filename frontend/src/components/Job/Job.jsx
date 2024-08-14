import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  import React from 'react'

  
  export function BlogCard() {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray">
            UI/UX Review Check
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 text-md">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Apply Now
        </Button>
      </CardFooter>
        
      </Card>
    );
  }

 
  
  function Job() {
    return (
      <div>
        <BlogCard/>
        
      </div>
    )
  }
  
  export default Job
  