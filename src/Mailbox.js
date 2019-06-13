import React from "react";

function Mailbox(props){
    const messagesnonlus=props.messagesnonlus;
    return(
        <div>
            <h1>Hello!</h1>
            {messagesnonlus.length>0 &&
                <h2>
                    Vous avez {messagesnonlus.length} messages non lus.
                </h2>
            }
        </div>
    );
}



export default Mailbox;