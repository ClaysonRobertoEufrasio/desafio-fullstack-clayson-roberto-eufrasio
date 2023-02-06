import { ReactNode, createContext} from "react";
import { ICustomers } from "../Pages/Customers/Customers";

interface IChildrenProps {
    children: ReactNode;
  }

interface IUserConstext {
    onSubmitCustomers: (data: ICustomers) => void
    onSubmitContats: (data: ICustomers) => void
}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext);

export default function AuthProvider({ children }: IChildrenProps) {

    const onSubmitCustomers = (data: ICustomers) => {
        console.log(data)
    }

    const onSubmitContats = (data: ICustomers) => {
        console.log(data)
    }    

    return (
        <AuthContext.Provider 
            value={{
                onSubmitCustomers,
                onSubmitContats
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}