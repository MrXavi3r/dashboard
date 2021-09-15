import React, { useState, useEffect } from "react";

import friend from "./friends";
import Friend from "./Friend";
import Chat from "./Chat";
import Aux from "../../../../../../../hoc/_Aux";

const Friends = (props) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (!props.listOpen) {
      setChatOpen(false);
      setUser([]);
    }
  }, [props.listOpen]);

  const friendList = friend.map((f) => {
    return (
      <Friend
        key={f.id}
        data={f}
        activeId={user.id}
        clicked={() => (setChatOpen(true), setUser(f))}
      />
    );
  });
  return (
    <Aux>
      {friendList}
      <Chat
        user={user}
        chatOpen={chatOpen}
        listOpen={props.listOpen}
        closed={() => (setChatOpen(false), setUser([]))}
      />
    </Aux>
  );
};

export default Friends;
