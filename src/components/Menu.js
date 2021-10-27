import React from 'react'

const Menu = () => {
    return (
        <div className="col-12 p-0 m-0 fixed-top" style={{minHeight: '16vh'}}>
            <nav className="navbar navbar-expand-lg navbar-light rounded p-2 border border-info blurBack shadow" style={{minHeight: '12vh', margin: '2vh'}}>
                <div className="col-12 col-md-10 container-fluid">
                    <a className="navbar-brand" href="#">
                        <h1 className="text-info fw-light p-0 m-0">MS</h1>
                    </a>
                    <button className="navbar-toggler hvr-bounce-to-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-md-flex flex-md-row justify-content-md-end" id="navbarNavAltMarkup" data-toggle="collapse" data-target=".navbar-collapse">
                        <h5 className="fw-bold text-info px-2 pt-3 pt-sm-0 m-0">Stages</h5>
                        <div className="navbar-nav py-2 d-flex flex-row">
                            <a className="nav-link border border-info bg-light rounded fw-bold px-3 m-1 text-info" href="#stage1">1</a>
                            <a className="nav-link border border-info bg-light rounded fw-bold px-3 m-1 text-info" href="#stage2">2</a>
                            <a className="nav-link border border-info bg-light rounded fw-bold px-3 m-1 text-info" href="#stage3">3</a>
                            {/* <a className="nav-link border border-info bg-light rounded fw-bold px-3 m-1 text-info" href="#stage4">4</a>
                            <a className="nav-link border border-info bg-light rounded fw-bold px-3 m-1 text-info" href="#stage5">5</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu