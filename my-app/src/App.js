import './App.css';
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/index";
import DetailYearPage from "./pages/detail-year";
import DetailDefinitionPage from "./pages/detail-definition";
import DetailKeywordPage from "./pages/detail-keyword";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/detail/year/:year" element={<DetailYearPage/>}/>
            <Route path="/detail/keyword/:keyword" element={<DetailKeywordPage/>}/>
            <Route path="/detail/definition/:definition" element={<DetailDefinitionPage/>}/>
        </Routes>
    );
}

export default App;
