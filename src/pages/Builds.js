import { useContext } from "react";
import { InitialContext } from "../context/InitialContext";

export default function Builds() {

    const { user, setUser } = useContext(InitialContext);

    return <h1>Builds Page</h1>;
  }