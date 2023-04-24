import React from "react";

function Loading() {

    var quotes = ["“Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.” — Ellen DeGeneres",]

    return (
        <div className="vh-100 vw-100 container-fluid d-flex justify-content-center align-items-center">
            <div className="w-50 mx-auto">
                <div className="text-center">
                    <div className="text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-gift mb-3"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
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