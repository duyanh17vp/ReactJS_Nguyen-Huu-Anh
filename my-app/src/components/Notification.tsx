import './Notification.css'

export function Notification(){
    return(
        <div className="Board">
            <div className="Title">Notifications</div>
                <form>
                <div className="texthead">Control your notifications and auto-follow setting</div>
                <div className="row">
                    <div className="col-8">
                        <div className="line-1">line 1</div>
                        <div className="line-2">line 2</div>
                    </div>
                    <div className="col-4">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switch1" />
                        <label className="custom-control-label" htmlFor="switch1"></label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="line-1">line 1</div>
                        <div className="line-2">line 2</div>
                    </div>
                    <div className="col-4">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switch2" />
                        <label className="custom-control-label" htmlFor="switch2"></label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="line-1">line 1</div>
                        <div className="line-2">line 2</div>
                    </div>
                    <div className="col-4">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switch3" />
                        <label className="custom-control-label" htmlFor="switch3"></label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="line-1">line 1</div>
                        <div className="line-2">line 2</div>
                    </div>
                    <div className="col-4">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switch4" />
                        <label className="custom-control-label" htmlFor="switch4"></label>
                    </div>
                    </div>
                </div>
                </form>           
        </div>
    );
}