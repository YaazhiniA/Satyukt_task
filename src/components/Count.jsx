import React, { useEffect, useState } from "react";
import { useContext } from "react";

import Card from "./common/Card";
import DataContext from "../context/DataContext";

export default function Count(props) {
  const States = useContext(DataContext);
  const [StateCode, setStateCode] = useState(null);
  const [active, setActive] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [death, setDeath] = useState(0);

  useEffect(() => {
    setStateCode(props.selectedState);
    for (let State of States) {
      if (State.key === StateCode) {
        setActive(State.total.confirmed);
        setRecovered(State.total.recovered);
        setDeath(State.total.deceased);
      }
    }
  }, [props, States, StateCode]);

  return (
    <div className="row">
      <Card label="Active" data={active} color="active" />
      <Card label="Recovered" data={recovered} color="recovered" />
      <Card label="Dead" data={death} color="dark" />
    </div>
  );
}
