import { PropsWithChildren, createContext, useCallback, useState } from "react";
import * as utils from "./utils";
import { JWTPayload } from "jose";

type AuthContextProps = {
    auth: JWTPayload | null;
    makeLoginUrl: () => string;
    login: (
        accessToken: string,
        idToken: string,
        state: string
    ) => JWTPayload;
    makeLogoutUrl: () => string;
};

const initContextData: AuthContextProps = {
    auth: null,
    makeLoginUrl: utils.makeLoginUrl,
    //@ts-expect-error - this is a mock function
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login: () => {},
    //@ts-expect-errors
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    makeLogoutUrl: () => {},
};

export const AuthContext = createContext(initContextData);

export const AuthProvider = (props: PropsWithChildren) => {
    const makeLogin = useCallback((accessToken: string, idToken: string, state: string) => {
        const authData = utils.login(accessToken, idToken, state);
        setData((oldData) => ({
            auth: authData,
            makeLoginUrl: oldData.makeLoginUrl,
            login: oldData.login,
            makeLogoutUrl: oldData.makeLogoutUrl,
        }));
        return authData;
    }, []);

    const [data, setData] = useState({
        auth: utils.getAuth(),
        makeLoginUrl: utils.makeLoginUrl,
        login: makeLogin,
        makeLogoutUrl: utils.makeLoginUrl,
    });

    return (
        <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
    );
};