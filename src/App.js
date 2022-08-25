import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { getList } from "./api/product";
import { getListAccounts } from "./api/account";
import Login from "./pages/login/Login";
import Add from "./pages/add/Add";
import PrivatePages from "./pages/private/PrivatePages";
import AuthPage from "./pages/auth/AuthPage";
import { db } from './firebase/firebase'; // update with your path to firestore config
import { collection, getDocs } from "firebase/firestore";
export const Context = createContext();

function App() {
  const [updateData, setUpdateData] = useState(true);
  const [listAccounts, setListAccounts] = useState([]);
  const [data, setData] = useState([]);
  const [loginPage, setLoginPage] = useState(true);
  const [homePage, setHomePage] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState();
  const [listImages, setListImages] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notesSnapshot = await getDocs(collection(db, "images"));
      const notesList = notesSnapshot.docs.map((doc) => doc.data());
      setListImages(notesList[0]) ;
    };
    getNotes()
  },[])

  // console.log(listImages)

  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  useEffect(() => {
    getList(setData);
    getListAccounts(setListAccounts);
  }, [updateData]);

  return (
    <Context.Provider
      value={{
        updateData,
        setUpdateData,
        data,
        listAccounts,
        setHomePage,
        homePage,
        loginPage,
        setLoginPage,
        logIn,
        logOut,
        isLoggedIn
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage/>} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login/>}/>
          {isLoggedIn && <Route path="/dashboard/*" element={<PrivatePages/>}/>}
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
