import React, { FormEvent} from "react";

type Contact = {
    name: string;
    email: string;
    reason: string;
    notes: string;
};

export default function Ex6() {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const contact = {

            name: formData.get('name'),

            email: formData.get('email'),

            reason: formData.get('reason'),

            notes: formData.get('notes'),

        } as Contact;


        console.log('Submitted details:',contact);
    }

    return (
        <div>
            <h2>Contact Us</h2>
            <p>If you enter your details we'll get back to youa s soon as we can.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Your email address</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="reason">Reason you need to contact us</label>
                    <select id="reason" name="reason">
                        <option value=""></option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="notes">Additional notes</label>
                    <textarea id="notes"  name={"notes"} />
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


