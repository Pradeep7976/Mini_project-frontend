import React, { useEffect, useState } from "react";
import {
  Spacer,
  Badge,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Divider,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { WarningTwoIcon, CheckIcon, InfoIcon } from "@chakra-ui/icons";
import Problems from "./R_Problems_api";
import "./R_Problems.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const reported_problems = Problems;
const R_Problems = (props) => {
  const Port = "https://expensive-hem-elk.cyclic.app";
  const port = "http://localhost:7000";
  const name = props.name;
  const [problems, setproblems] = useState([]);
  //   console.log(name);
  let navigate = useNavigate();
  useEffect(() => {
    // axios.get(port + "/api/dept/probs/" + name).then((response) => {

    axios
      .get("http://localhost:7000/api/dept/probs/Electric Department")
      .then((response) => {
        let prob = response.data;
        if (prob.length == 0) {
          alert("NO probs");
        } else {
          setproblems(prob);
          console.log(prob);
        }
      })
      .catch((err) => {
        console.log("error fetching data");
      });
  }, []);
  return (
    <>
      {problems.map((currElem) => {
        return (
          <>
            <center>
              <Card
                maxW="sm"
                boxShadow="dark-lg"
                mb="7"
                bg="#e6e6e6"
                onClick={() => {
                  navigate("/probdetails/" + currElem.pid);
                }}
                cursor={"pointer"}
              >
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Image of the problem"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" color="tomato">
                      {currElem.name}
                    </Heading>
                    <Text color="blue.600">
                      <Badge colorScheme="blue">Date</Badge>:{" "}
                      {new Date(currElem.formatdate).toLocaleDateString(
                        "en-GB"
                      )}
                    </Text>

                    {/* <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text> */}
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="green">
                      <CheckIcon mr="2" />
                      Solved
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Full Details
                      <InfoIcon ml="2" />
                    </Button>
                    <Spacer />
                    <Button>
                      <WarningTwoIcon color="red" />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </center>
          </>
        );
      })}
    </>
  );
};

export default R_Problems;
