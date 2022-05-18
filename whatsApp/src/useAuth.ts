import { onAuthStateChanged } from "firebase/auth";
import {useEffect, useMemo, useState} from "react";
import { auth } from "./database/firebase";

export const useAuth = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({})

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, async user => {

            if(user) {
                setIsLoggedIn(true)
                setUser(user)
            } else {
                setIsLoggedIn(false)
                setUser({})
            }
        })

        return unSub
    }, [])

    const values = {
        user, isLoggedIn
    }

    return useMemo(() => values, [values])

}
