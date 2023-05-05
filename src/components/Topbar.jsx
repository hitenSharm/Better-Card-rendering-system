import { Button, Col, Row, Typography } from "antd";
const { Title } = Typography;

export const Topbar = () => {
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
          borderBottom: "1px solid gray",
        }}
      >
        <Title level={3}>clamp.</Title>
        <Col span={8} />
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            fontFamily: "monospace",
            marginBottom: "30px",
          }}
          size="large"
        >
          Connect Wallet
        </Button>
      </Row>
    </>
  );
};
