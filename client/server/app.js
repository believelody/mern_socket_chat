// const webSocket = require('ws');
// const wss = new webSocket.Server({ port: 8989 });
//
// const users = [];
//
// const broadcast = (data, ws) => {
//   ws.clients.forEach(client => {
//     console.log(data);
//     if (client.readyState === webSocket.OPEN && client !== ws) {
//       client.send(JSON.stringify(data))
//     }
//   });
// }
//
// wss.on('connection', (ws) => {
//   let index;
//   ws.on('message', message => {
//     const data = JSON.parse(message);
//     switch (data.type) {
//       case 'ADD_USER':
//         index = users.length;
//         users.push({ name: data.name, id: index + 1});
//         ws.send(JSON.stringify({
//           type: 'USERS_LIST',
//           payload: users
//         }));
//
//         broadcast({
//           type: 'USERS_LIST',
//           payload: users
//         }, ws);
//         break;
//       case 'ADD_MESSAGE':
//         broadcast({
//           type: 'ADD_MESSAGE',
//           payload: {
//             message: data.message,
//             author: data.author
//           }
//         }, ws);
//         break;
//       default:
//         break;
//     }
//   });
//
//   ws.on('close', () => {
//     users.splice(index, 1);
//     broadcast({
//       type: 'USERS_LIST',
//       users
//     }, ws);
//   })
// })
