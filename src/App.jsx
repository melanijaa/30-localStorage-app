import { useEffect, useState } from "react";
//import "./bootstrap.css";
import "./crud.scss";
import Create from "./Components/Create";
import List from "./Components/List";
import { create, edit, read, remove } from "./Functions/localStorage";
import Edit from "./Components/Edit";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import SideBarTwo from "./Components/SideBarTwo";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [exes, setExes] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  //Read
  useEffect(() => {
    setExes(read());
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <>
      <NavBar></NavBar>
      <Main></Main>
      <SideBar></SideBar>
      <SideBarTwo></SideBarTwo>
      <Create setCreateData={setCreateData}></Create>
      <List
        exes={exes}
        setDeleteData={setDeleteData}
        setModalData={setModalData}
      ></List>
      <Edit
        setEditData={setEditData}
        modalData={modalData}
        setModalData={setModalData}
      ></Edit>
    </>
  );
}
export default App;
