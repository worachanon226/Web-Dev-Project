import React from "react";

function Loading() {

    var quotes = ["“Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.” — Ellen DeGeneres",]

    return (
        <div className="vh-100 vw-100 container-fluid d-flex justify-content-center align-items-center">

            <div className="w-50 mx-auto">

                <div className="text-center">
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <img className="picturboxlayer d-flex " src="https://cdn.dribbble.com/users/1967406/screenshots/4882715/motorcycle.gif" alt="hew" />
                    </div>
                    <div className="text-danger">
                    </div>
                    <p className="fs-4 fw-bold mb-5">{quotes[0]}</p>
                    <div className="spinner-border text-danger" style={{ width: 50, height: 50, borderWidth: 7 }} role="status">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;