import UserClass from "./UserClass";
import UserState from "./UserState";

const About = () =>
{
    return (
        <div>
            <UserState name={"Dhirendra Singh (State)"} location={"UP"}/>
            {/* <UserClass name={"Dhirendra Singh (State)"} location={"UP"}/> */}
        </div>
    )
}

export default About;
