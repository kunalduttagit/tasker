import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        if (!text) {
            alert("Please add a task first");
            return;
        }

        onAdd({ text, day, reminder });
        setText("");
        setDay("");
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={e => {
                        setText(e.currentTarget.value);
                    }}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    checked={reminder}
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={e => setDay(e.currentTarget.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    checked={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    );
};

export default AddTask;
