import React from "react";
import { useActionState } from "react";

function ChatPage() {
  const { logout } = useActionState;
  return (
    <div className="z-10">
      ChatPage
      <button onClick={logout}>logout</button>;
    </div>
  );
}

export default ChatPage;
