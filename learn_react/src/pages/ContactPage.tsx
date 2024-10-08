import React, {FormEvent} from "react";
import {Form, ActionFunctionArgs, redirect} from 'react-router-dom';

type Contact = {
    name: string;
    email: string;
    reason: string;
    notes: string;
};

export function ContactPage() {


    return (
        <div>
            <h2>Contact Us</h2>
            <p>If you enter your details we'll get back to you as soon as we can.</p>
            <Form method="post">
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required/>
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
                    <textarea id="notes" name={"notes"}/>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};

export async function contactPageAction({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const contact = {
        name: formData.get('name'),
        email: formData.get('email'),
        reason: formData.get('reason'),
        notes: formData.get('notes'),
    } as Contact;

    console.log('Submitted details:', contact);
    return redirect(`/thank-you/${formData.get('name')}`);
}

