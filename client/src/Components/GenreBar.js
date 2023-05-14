import React, { useContext } from "react";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import { ListGroup } from "react-bootstrap";

const GenreBar = observer(() => {
    const {book} = useContext(Context)

    return(
        <ListGroup>
            {book.genres.map(genre =>
                <ListGroup.Item 
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