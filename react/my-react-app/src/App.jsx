import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";
import OnSubmit from "./components/EventHandling/OnSubmit";
import Parent from "./components/Props/Parent";
import ProfileContainer from "./components/PropsExample/ProfileContainer";

export default function App() {
  return (
    <div>
      <ProfileContainer />
    </div>
  );
}
