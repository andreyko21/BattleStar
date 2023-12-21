// import io from "socket.io-client";

// interface ChatMessage {
//   id: string;
//   content: string;
//   senderId: string;
//   timestamp: Date;
// }

// interface ChatUpdate {
//   id: string;
//   newContent: string;
// }

// interface ChatDeletion {
//   id: string;
// }

// function connect() {
//   const SERVER_URL =
//     "http://localhost:1337?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsImlhdCI6MTcwMzA5NzQ2OCwiZXhwIjoxNzA1Njg5NDY4fQ.LGVeGlHWQ4OvbiT_4mW3fyYVXrt6j63rs5BRPudyiGY";
//   const socket = io(SERVER_URL);

//   socket.on("connect", () => {
//     socket.on("user-online-status-updated", (data) => {
//       console.log("User online status updated:", data);
//     });

//     socket.on("chat:create", (data: ChatMessage) => {
//       addMessageToChat(data);
//     });

//     socket.on("chat:update", (data: ChatUpdate) => {
//       updateChatMessage(data.id, data.newContent);
//     });

//     socket.on("chat:delete", (data: ChatDeletion) => {
//       removeMessageFromChat(data.id);
//     });
//   });

//   return socket;
// }

// function addMessageToChat(message: ChatMessage) {}

// function updateChatMessage(id: string, newContent: string) {}

// function removeMessageFromChat(id: string) {}

// const socket = connect();

// socket.emit("update-chat", { id: "user-id", name: "new-name" });
