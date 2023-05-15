import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card } from "react-bootstrap";

const AuthBar = observer(() => {
    const {book} = useContext(Context)

    return(
        <div className="d-flex flex-wrap"> 
            {book.authors.map(author => 
                <Card
                style={{cursor: 'pointer'}}
                key={author.id}
                className="p-3"
                onClick={() => book.setSelectedAuthor(author)}
                border={author.id === book.selectedAuthor.id ? 'primary' : 'light'}
                >
                    {author.name}

                </Card>
                )}

        </div>
    );
});

export default AuthBar;