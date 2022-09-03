import React from "react";
class Locations extends React.Component{
    state = {
        cityBanglore : false,
        cityChennai : false,
        cityNewyork : false
    };
    updateLocation = () => {
        this.setState({
            [Event.target.name] : Event.target.checked,
        });
    };
    render(){
        return (
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type = "checkbox" onChange={this.updateLocation} name = "cityBanglore"/>
                            <label className="form-check-label">Bangalore</label>
                        </div>
                        <div>
                        <input className="form-check-input" type = "checkbox" onChange={this.updateLocation} name = "cityChennai"/>
                            <label className="form-check-label">Chennai</label>

                        </div>
                        <div>
                        <input className="form-check-input" type = "checkbox" onChange={this.updateLocation} name = "cityNewyork"/>
                            <label className="form-check-label">Newyork</label>
                        </div>
                        <div className="col-md-10">{this.state.cityBanglore ? (<>
                        <div className="card">
                            <div className="card-body bg-primary">

                            </div>
                            </div>
                            </>) : null}
                            

                        </div>
                        <div className="col-md-10">{this.state.cityChennai ? (<>
                        <div className="card">
                            <div className="card-body bg-primary">

                            </div>
                            </div>
                            </>) : null}
                            

                        </div>
                        <div className="col-md-10">{this.state.cityNewyork ? (<>
                        <div className="card">
                            <div className="card-body bg-primary">

                            </div>
                            </div>
                            </>) : null}
                            

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Locations;