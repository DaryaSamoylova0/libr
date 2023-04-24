import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import Contacts from "../Pages/Contacts";

const GenreBar = observer(() => {
    const {book} = useContext(Context)
    return (
        <div>
            
        </div>
    );
});

export default GenreBar;