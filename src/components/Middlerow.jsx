import { Col, Row, Typography } from "antd";

export const Middlerow = () =>{
    return(
        <>
        <Row
        style={{
          marginTop: "50px",
        }}
      >
        <Col span={4} />
        <Typography
          style={{
            fontSize: "1.25em",
            fontWeight: "bold",
            borderBottom: "2px solid",
          }}
        >
          Explore
        </Typography>
      </Row>      
        </>
    );
}