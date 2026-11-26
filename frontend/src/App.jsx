
import AuthModal from "./layouts/AuthModel";
import ChatPage from "./pages/ChatPage";

import { getMe } from "./features/auth/authThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch();

    const { authChecked, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    if (!authChecked) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#080D19] text-white">
                Loading...
            </div>
        );
    }

    return (
        <>
            {isAuthenticated ? (
                <ChatPage />
            ) : (
                <AuthModal />
            )}
        </>
    );
}

export default App;
