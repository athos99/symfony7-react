import React, {useState, FormEvent} from "react";

type Contact = {
    name: string;
    email: string;
    reason: string;
    notes: string;
};

export default function Ex5() {
    const [contact, setContact] = useState<Contact>({
        name: "",
        email: "",
        reason: "",
        notes: "",
    });
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitted details:', contact);
    }
    return (
        <div>
            <h2>Contact Us</h2>
            <p>If you enter your details we'll get back to youa s soon as we can.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" value={contact.name}
                           onChange={(e) => setContact({...contact, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Your email address</label>
                    <input type="email" id="email" value={contact.email}
                           onChange={(e) => setContact({...contact, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="reason">Reason you need to contact us</label>
                    <select id="reason" value={contact.reason}
                            onChange={(e) => setContact({...contact, reason: e.target.value})}>
                        <option value=""></option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="notes">Additional notes</label>
                    <textarea id="notes" value={contact.notes}
                              onChange={(e) => setContact({...contact, notes: e.target.value})}/>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};


