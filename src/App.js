import './App.css';
import Menu from "./header/Menu";
import {Route, Routes} from "react-router-dom";
import Biography from "./components/biography";
import Picture from "./components/picture";
import PictureLayout from "./components/pictureLayout";
import PictureList from "./components/pictureList";
import UnitPicture from "./components/unitPicture";
import {NewPicture} from "./components/newPicture";

function App() {
  return (
    <div>
      <header>
          <h2>Рафае́ль Са́нті</h2>
       <Menu/>
      </header>
<main>
    <Routes>
        <Route path="/" element={<Biography/>}/>
        <Route path="/picture" element={<Picture/>}/>
        <Route path="/pictures" element={<PictureLayout/>}>
            <Route index element={<PictureList/>}/>
            <Route path="add" element={<NewPicture/>}/>
            <Route path=":id" element={<UnitPicture/>}/>
        </Route>
    </Routes>
</main>
    </div>
  );
}

export default App;
