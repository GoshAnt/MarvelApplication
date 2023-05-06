import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";
    const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
    const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
    const SinglePage = lazy(() => import('../pages/SinglePage'));
const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>  
                    <Routes>
                        <Route  path="/" element={ <MainPage/>}/>
                        <Route  path="/comics" element={<ComicsPage/>}/>
                        <Route  path="/comics/:comicId" element={<SingleComicPage/>}/>
                        <Route path='*' element={<Page404/>}/>
                        <Route path="/comics/:id" element={ <SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                        <Route path="/characters/:id" element={  <SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>

                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;