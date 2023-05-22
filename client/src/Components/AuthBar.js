import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagination.css';

const AuthBar = observer(() => {
    const {book} = useContext(Context)

    return(
        <div className="d-flex flex-wrap"> 
            {book.authors.map(author => 
                <Card 
                className="authcard p-3"
                style={{cursor: 'pointer'}}
                key={author.id}
                onClick={() => book.setSelectedAuthor(author)}
                border={author.id === book.selectedAuthor.id ? '#643c34' : 'light'

                }
                >
                    {author.name}

                </Card>
                )}

        </div>
    );
});

export default AuthBar;