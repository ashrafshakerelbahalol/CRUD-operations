import { configureStore } from "@reduxjs/toolkit";
import GetSlice from "./GetSlice";
import RegSlice from "./VerifyForm/ValidRegisterSlice"
import LoginSlice from "./VerifyForm/VaildLoignSlice";
import ForgetSlice from "./VerifyForm/ValidForgetPassword";
import  getAuthorzied  from "./Autorization/AuthLogin";
import  LogoutSlice  from "./Autorization/Logout";


export const store = configureStore({
    reducer: {
        register:RegSlice,
        login:LoginSlice,
        forgetpass:ForgetSlice,
        authoUser:getAuthorzied,
        logout:LogoutSlice,
        usersData:GetSlice
    }
})