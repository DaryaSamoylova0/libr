import React, { useContext } from "react";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import { ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagination.css';

const GenreBar = observer(() => {
    const {book} = useContext(Context)

    return(
        <ListGroup>
            {book.genres.map(genre =>
                <ListGroup.Item className="list"
                style={{cursor: 'pointer'}}
                active={genre.id === book.selectedGenre.id}
                onClick={() => book.setSelectedGenre(genre)}
                key={genre.id}>
                    {genre.name}
                </ListGroup.Item>
                )}
        </ListGroup>
    );
});

export default GenreBar;