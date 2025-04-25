import { useContext, useEffect } from "react";
import { InitialContext } from "../context/InitialContext";

export default function Home() {
    const { user, setUser } = useContext(InitialContext);

    useEffect(() => {
        setUser('Jari')
    }, []);

    return <h1>Home Page</h1>;
  }