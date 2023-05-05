import { Col, Row, Typography } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { MemoisedCard } from "./components/Cards";
import { Middlerow } from "./components/Middlerow";
import { Topbar } from "./components/Topbar";

function App() {
  const [renderedAmount, setRenderedAmount] = useState(0); //from children we set this after succesful render
  const [indexes, setIndexes] = useState(0); //increase the number of indexes rendered using this
  const [renderedCards, setRenderedCards] = useState([0,1,2]);
  const [cardsAll,setAllCards]=useState([1,2,3,4,5,6,7,8,9]);

  const handleNewRenders = () => {
    setRenderedAmount((r) => r + 1);
  };

  useEffect(() => {
    if (renderedAmount === indexes+3 && indexes + 3 < 9) {
      //max 9 cards rendered
      setIndexes(renderedAmount);
      setRenderedCards((renderedCards)=>[
        ...renderedCards,
        ...cardsAll.slice(renderedAmount,renderedAmount+3)
      ])
    }
    if(renderedAmount>9){
      setRenderedAmount(9);
    }
    console.log(renderedAmount);
  }, [renderedAmount]);

  // const renderCards = () =>{
  //   for
  // }

  return (
    <>
      <Topbar />
      <Middlerow />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <Row
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "45px",
            }}
          >
            <Typography
              style={{
                fontSize: "1.3em",
              }}
            >
              Buy any crypto index anytime, anywhere.
            </Typography>
          </div>

          <div>
            <Row
              justify="center"
              gutter={6}
              style={{
                maxWidth: "1300px",
                marginTop: "-19px",
              }}
            >
              {/* {(() => {
                let td = [];
                for (let i = 0; i < indexes; i++) {
                  td.push(<MemoisedCard handleNewRenders={handleNewRenders} />);
                }
                return td;
              })()} */}

              {renderedCards.length &&
                renderedCards.map(()=>{
                  return <><MemoisedCard handleNewRenders={handleNewRenders} /></>
                })
                }
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}

export default App;
