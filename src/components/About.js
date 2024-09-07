import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h3>Version 1.0.4 </h3>
            <pre>Last Updated: Jan 3, 2023</pre>
            <hr />
            This App helps you to maintain and manage your tasks easily. You can
            Add tasks, double click to toggle Reminders and delete Tasks that
            are completed. <br />
            <br />
            The simple UI helps to make all operations effortless and simple.
            <br />
            <br />
            This app uses a local JSON server to simulate a real server with
            fetch API to act as backend for this app.
            <br />
            <br />
            Dependencies:
            <li>React Version: 18.2.0 LTS</li>
            <li>React Router Dom Version: 6.6.1</li>
            <li>React Icons Version: 4.7.1</li>
            <li>JSON Server Version: 0.17.1</li>
            <br />
            <hr />
            <h4>Developed By Kunal Dutta at Kunal.co</h4>
            <h4>
                Mail us at &nbsp;
                <a target="_blank" href="mailto:kunaduttaedu@gmail.com">
                    here
                </a>
            </h4>
            <Link to="/"><b>Go Back</b></Link>
        </div>
    );
};

export default About;