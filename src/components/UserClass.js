import React from "react";

class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            UserInfo : 
            {
                name : "Dummy",
                location : "India",
            }
        };
    }

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/sumit2997");
        const json = await data.json();

        this.setState({ UserInfo : json });

        console.log(json);
    }

    render ()
    {
        // const { name ,location } = this.props;
        // const { count } = this.state;

        const { name , location , avatar_url } = this.state.UserInfo;

        return (
            <div className="user-info">
                {/* <button
                    //Never Update state Variable directly
                    // To Update we use this.setState()
                    onClick={() => 
                    { this.setState({ count: this.state.count + 1 }); }}
                >Count Increase</button> */}
                
                <img src={avatar_url}></img>
                <p>Name : {name || "Sumit Narayan"}</p>
                <p>Location : {location}</p>
                <p>Contact : @sliet.ac.in</p>
            </div>
        )
    }
}

export default UserClass;