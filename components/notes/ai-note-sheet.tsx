// "use client";
// import React from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";

// const AiNoteSheet = () => {
//   return (
//     <Sheet>
//       <SheetTrigger>Generate</SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>AI Generate Response</SheetTitle>
//           <SheetDescription>
//             {isLoading && (
//               <p className="text-muted-foreground text-sm">
//                 Generating summary...
//               </p>
//             )}

//             {messages.length > 0 && (
//               <div className="text-sm text-muted-foreground">
//                 {messages[messages.length - 1].parts.map((part, i) => {
//                   if (part.type === "text") {
//                     return <div key={i}>{part.text}</div>;
//                   }
//                 })}
//               </div>
//             )}
//           </SheetDescription>
//         </SheetHeader>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default AiNoteSheet;
