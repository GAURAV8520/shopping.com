import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import React, { useState, useRef } from 'react';
  
  function Addproduct() {
    const [user, setUser] = useState({
      photo: "",
      username: "",
      email: "",
      price: 0,
      numberofitems: 0,
    });
    const [userinfo, setUserinfo] = useState(null);
  
    // Create a reference for the hidden file input
    const fileInputRef = useRef(null);
  
    const handlechange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setUser({ ...user, photo: file.name }); // You can store the file name or the file itself
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUserinfo(user);
      console.log(userinfo);
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card color="white" shadow={true} className="p-6 max-w-lg w-full">
          <Typography variant="h4" color="blue-gray" className="text-center mb-4">
            Add Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Product Photo
                </Typography>
                <div
                  className="flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition"
                  onClick={() => fileInputRef.current.click()} // Trigger file input click
                >
                  <input
                    type="file"
                    name="photo"
                    ref={fileInputRef} // Associate the ref with the input
                    onChange={handleFileChange} // Handle file selection
                    className="hidden"
                  />
                  <span className="text-blue-500">
                    {user.photo || "Click to upload"}
                  </span>
                </div>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Product Name
                </Typography>
                <Input
                  size="lg"
                  name="username"
                  placeholder="Enter product name"
                  className="border-gray-300 focus:border-blue-500"
                  value={user.username}
                  onChange={handlechange}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Description
                </Typography>
                <Input
                  size="lg"
                  type="text"
                  name="email"
                  placeholder="Enter description"
                  className="border-gray-300 focus:border-blue-500"
                  value={user.email}
                  onChange={handlechange}
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Price
                  </Typography>
                  <Input
                    size="lg"
                    name="price"
                    type="Number"
                    placeholder="Enter price"
                    className="border-gray-300 focus:border-blue-500"
                    value={user.price}
                    onChange={handlechange}
                  />
                </div>
                <div className="w-1/2">
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Number of Items
                  </Typography>
                  <Input
                    size="lg"
                    name="numberofitems"
                    type="Number"
                    placeholder="Enter quantity"
                    className="border-gray-300 focus:border-blue-500"
                    value={user.numberofitems}
                    onChange={handlechange}
                  />
                </div>
              </div>
            </div>
            <Button className="mt-6 bg-blue-500 hover:bg-blue-600" fullWidth type="submit">
              Add Product
            </Button>
          </form>
        </Card>
      </div>
    );
  }
  
  export default Addproduct;
  