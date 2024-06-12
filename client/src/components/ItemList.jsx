import React from "react";
import { useSelector } from "react-redux";

const ItemList = () => {
  const businessInfo = useSelector((state) => state.business.businessList);

  return (
    <div>
      <table className="table text-start">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">isProfitable</th>
            <th scope="col">Owner</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            if (businessInfo.length > 0) {
              return businessInfo.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.capital}</td>
                  <td>
                    {item.isProfitable ? (
                      "Yes : " + item.profit
                    ) : (
                      <>
                        <span className="text-danger">No : {item.loss}</span>
                      </>
                    )}
                  </td>
                  <td>{item.owner}</td>
                </tr>
              ));
            }
          })()}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
