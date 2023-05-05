import { Button, Card } from "antd";
import { PoundCircleOutlined, RiseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { simulateAPI } from "../api/api";
import { useState } from "react";
import React from "react";

const Cards = (props) => {

  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function apiCall(){
      await simulateAPI();
      setLoading(false);
    }    
    apiCall();
  },[])

  useEffect(()=>{
    if(!loading){
      props.handleNewRenders();
    }
  },[loading])

  return (
    <>
      <div style={{
        margin:"10px"
      }}>
      <Card loading={loading} title="WEBTC-WEBETH" headStyle={{
        backgroundColor:"#F19241"
      }} style={{
        width:"350px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
        <div
          style={{
            display: "flex",                     
          }}
        >
          <div
            style={{
              marginRight: "50px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Underlying tokens
            <div
              style={{
                marginTop: "5px",
              }}
            >
              <PoundCircleOutlined
                style={{
                  marginRight: "0.2em",
                  fontSize: "150%",
                }}
              />
              <PoundCircleOutlined
                style={{
                  marginRight: "0.2em",
                  fontSize: "150%",
                }}
              />
            </div>
          </div>
          <div
            style={{
              marginLeft: "50px",
            }}
          >
            Price change
            <div
              style={{
                marginTop: "5px",
                fontSize: "150%",
              }}
            >
              <RiseOutlined
                style={{
                  marginRight: "5px",
                }}
              />
              0.72%
            </div>
          </div>
        </div>
        <div style={{
          display:"flex",
          justifyContent:"center"
        }}>
        <Button style={{
          backgroundColor:"black",
          color:'white',
          width:"290px"
        }}>Buy</Button>
        </div>
      </Card>
      </div>
    </>
  );
};

export const MemoisedCard=React.memo(Cards);