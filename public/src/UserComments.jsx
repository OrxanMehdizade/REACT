import React from "react";
import { useParams } from "react-router-dom";

const UserComments = ({ arr }) => {
    let { id } = useParams();

    return (
        <div>
            <h2>User Comments</h2>
            <ul>
                {arr
                    .filter((itemFilter) => itemFilter.id == id)
                    .map((item) => {
                        return (
                            <li key={item.id}>
                                <p>{item.body}</p>
                                <p>{item.title}</p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default UserComments;