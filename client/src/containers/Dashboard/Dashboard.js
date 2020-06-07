import React, { useState } from "react";
import { useSelector } from "react-redux";

import Footer from "../../components/Footer";
import Users from "./Users";
import Pages from "./Pages";
import Images from "./images";
import Tabs from "../../components/Dashboard/tabs";
import Header from "../../containers/Headers/AdminHeader";
import Editor from "../../components/Editors/Editor";


export default function Dashboard() {
  const [viewData, setViewData] = useState("users");
  const [showEditor, setShowEditor] = useState(false);
	const token = useSelector(state => state.auth.authToken);
  const stateUser = Object(useSelector((state) => state.users.user));



  const editorOpener = (val) => setShowEditor(val);

  // useEffect(() => {
  //   dispatch(getUser(token));
  // }, [dispatch]);

  return (
    <div className="App flex-col">
      <Header
        user={stateUser !== null || undefined ? stateUser.username : ""}
      />
      <div className="flex-col top">
        {showEditor ? (
          <Editor clickbackAction={editorOpener} />
        ) : (
          <div>
            <Tabs toggleNav={(data) => setViewData(data)} />
            <div
              className="tabs-container container is-fluid flex-col"
              style={{ background: "#F5F5F5", minHeight: "10vh" }}
            >
              {viewData === "users" ? (
                <Users token={token} />
              ) : viewData === "pages" ? (
                <Pages toEdit={editorOpener} token={token} />
              ) : (
                <Images token={token} />
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
