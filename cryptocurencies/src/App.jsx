import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./App.css"; // import the CSS file

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="center-table">
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt={item.name} width="30" height="30" />
              </td>
              <td>{item.name}</td>
              <td>{item.symbol.toUpperCase()}</td>
              <td>{item.current_price}</td>
              <td>{item.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
