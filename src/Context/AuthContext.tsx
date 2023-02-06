import { ReactNode, createContext} from "react";

interface IChildrenProps {
    children: ReactNode;
  }

interface IUserConstext {

}

export const AuthContext = createContext<IUserConstext>({} as IUserConstext);

export default function AuthProvider({ children }: IChildrenProps) {
    return (
        <AuthContext.Provider 
            value={{

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}