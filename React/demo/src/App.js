import React from "react";
// import MainState from "./State/MainState";
// import FormData from "./formHadling/FormData";
// import FormObj from "./formHadling/FormObj";
// import EffectData from "./Effect/EffectData";
// import UserEffect from "./Effect/UserEffect";
// import UserData from "./Effect/UserData";
// import CardData from "./Effect/CardData";
// import MainContext from "./Context/MainContext";
// import Boot from "./Design/Boot";
// import CardReact from "./Design/CardReact";
// import FooterData from "./Design/FooterData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
// import MainProps from "./Props/MainProps";
// import Css from "./Css/Css";
// import ClassCompo from "./Compoenent/ClassCompo";
// import FuncCompo from "./Compoenent/FuncCompo";
// import Hello from "./Jsx/Hello";

function App() {
    return (
        <BrowserRouter >
            <div>
                {/* <h1>Hello this App Data</h1> */}

                {/* compoenent */}
                {/* <ClassCompo /> */}
                {/* <ClassCompo /> */}
                {/* <FuncCompo /> */}
                {/* <FuncCompo /> */}

                {/* jsx file */}
                {/* <Hello /> */}

                {/* css file */}
                {/* <Css /> */}

                {/* Props */}
                {/* <MainProps /> */}

                {/* state */}
                {/* <MainState /> */}

                {/* <FormData /> */}
                {/* <FormObj /> */}

                {/* <EffectData /> */}
                {/* <UserEffect /> */}
                {/* <UserData /> */}
                {/* <CardData /> */}

                {/* Usecontext */}
                {/* <MainContext /> */}

                {/* design */}
                {/* <Boot /> */}
                {/* <CardReact /> */}

                {/* <FooterData /> */}


                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} >
                        <Route path="about1" element={<About1 />} />
                        <Route path="about2" element={<About2 />} />
                    </Route>

                    <Route path="/contact" element={<Contact />} />

                </Routes>


            </div>
        </BrowserRouter>
    )
}
export default App;