import React, { useState } from "react";
import {
  Text,
  Button,
  Center,
  Textarea,
  Flex,
  Box,
  Heading,
  Input,
  InputGroup,
  Stack,
  Container,
  InputLeftAddon,
  Img,
} from "@chakra-ui/react";
// import { AspectRatio } from "@chakra-ui/react";
import axios from "axios";
import "./MapboxMap.css";
import { useNavigate, useParams } from "react-router-dom";

// import { prewarm } from "mapbox-gl";
const Pdetails = () => {
  let navigate = useNavigate();
  const params = useParams();
  // /* eslint-disable */
  const [prob, setprob] = useState(localStorage.getItem("problem"));
  const [department, setdepartment] = useState(
    localStorage.getItem("department")
  );
  const [description, setdescription] = useState("");
  const [longitude, setlongitude] = useState(0.0);
  const [latitude, setlatitude] = useState(0.0);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  ///////////////////                 IMAGE                  //////////////////////////////////////
  async function handleSubmit(event) {
    console.log("sdfsdf");
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post("http://localhost:7000/upload", formData);
    setImageUrl(response.data.url);
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }
  ///////////////////                 IMAGE                  //////////////////////////////////////
  async function submit(event) {
    console.log("sdfsdf");
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const dat = {
      uid: localStorage.getItem("uid"),
      name: prob,
      description: description,
      latitude: 13.337797,
      longitude: 77.114565,
      department: department,
    };
    formData.append("data", JSON.stringify(dat));
    const response = await axios
      .post("http://localhost:7000/api/reportprob/temp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }, // set the content type to multipart form data
      })
      .then((resp) => {
        console.log(resp.data);
        if (!resp.data.done) {
          alert("the issue has already been noticed have patience");
        } else {
          navigate("/greet");
        }
      });
    console.log(response);
  }
  return (
    <>
      <Flex bg="#e62e00" pt="3" pb="3" mb="10">
        <Box>
          <center>
            <Heading color={"white"} ml="5">
              More Details...
            </Heading>
          </center>
        </Box>
      </Flex>
      <Container>
        <Stack spacing={6} mb="10">
          <InputGroup>
            <InputLeftAddon children="Name of the problem" />
            <Input type="text" value={prob} readOnly />l
          </InputGroup>

          {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
          <InputGroup>
            <InputLeftAddon children="Associated Department" />
            <Input
              type="text"
              placeholder="Automatically fill"
              value={department}
            />
            l
          </InputGroup>
        </Stack>
        <Text>
          <strong>Description: </strong>
        </Text>

        <Textarea
          mb="6"
          placeholder="Add more details(optional)..."
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <Text>
          <strong>Upload a photo : </strong>
          <Img
            src={
              imageUrl
                ? imageUrl
                : "https://ik.imagekit.io/aj4rz7nxsa/Mini_project/av5c8336583e291842624_Yp22FJ3dQ.png"
            }
            width={"17rem"}
          />
        </Text>

        <Input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        ></Input>
        <Button mt="3" type="submit">
          Upload
        </Button>
        {/* 
        <AspectRatio mt="10" mb="8" ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
        </AspectRatio> */}

        <Center
          className="pointer"
          boxShadow="dark-lg"
          bg="red"
          h="100px"
          color="white"
          mt="10"
          mb="5"
          borderRadius={10}
          onClick={submit}
        >
          <Box
            as="button"
            borderRadius="md"
            bg="red"
            color="white"
            px={4}
            h={8}
            m="auto"
          >
            <Heading>Submit</Heading>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default Pdetails;
