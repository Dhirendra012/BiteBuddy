const Footer = () => {
    return (
        <div className="bg-black text-white m-auto">
            <div className="m-auto w-8/12">
                <div className="flex justify-evenly items-center m-2 p-4">
                    <b>Company</b>
                    <b>Contact Us</b>
                    <b>We Deliver To : </b>
                </div>
                <div className="flex justify-evenly items-center text-slate-400 m-2 p-4">
                    <div>
                        <p>About</p>
                        <p>Career</p>
                        <p>Team</p>
                    </div>
                    <div>
                        <p>Help & Support</p>
                        <p>Partner with Us</p>
                        <p>Ride with Us</p>
                    </div>
                    <div>
                        <p>Delhi</p>
                        <p>Lucknow</p>
                        <p>Gorakhpur</p>
                    </div>
                </div>
                <div className="flex justify-center m-2 p-4">© 2024 Bundl Technologies Pvt. Ltd</div>
            </div>
        </div>
    )
}

export default Footer;