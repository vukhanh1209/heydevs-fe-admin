// "use client";
// import { useEffect, useState } from "react";
// import { redirect } from "next/navigation";
// import { notifyWarning } from "@/utils/notification";

// export default function isAuth(Component: any) {
//   return function IsAuth(props: any) {
//     const [isAuth, setIsAuth] = useState<boolean | undefined>();

//     useEffect(() => {
//       const auth = !!LocalStorage.getAccessToken();
//       setIsAuth(auth);
//     }, []);

//     useEffect(() => {
//       if (isAuth === false) {
//         notifyWarning("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại");
//         return redirect("/");
//       }
//     }, [isAuth]);

//     if (!isAuth) {
//       return null;
//     }

//     return <Component {...props} />;
//   };
// }
