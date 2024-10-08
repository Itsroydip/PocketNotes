// import React, { useState } from 'react'

// const App = () => {
//     const [route,setRoute] = useState(largeScreenRouter);

//     const largeScreenRouter = createBrowserRouter([
//         {
//           path: "/",
//           element: <AppLayout/>,
//           children: [
//             {
//               path: "/",
//               element: <Home/>
//             },
//             {
//               path: "/groups/:groupId",
//               element: <GroupRoute/>
//             },
//           ]
//         },
//         {
//           path:"*",
//           element: <ErrorPage/>
//         }
//       ]);
      
//       const smallScreenRouter = createBrowserRouter([
//         {
//           path: "/",
//           element: <Sidebar/>,
          
//         },
//         {
//           path: "/groups/:groupId",
//           element: <GroupRoute/>
//         },
//         {
//           path:"*",
//           element: <ErrorPage/>
//         }
//       ]);
//   return (
//     <RouterProvider router={router()} />
//   )
// }

// export default App