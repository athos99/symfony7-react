import {ActionFunctionArgs, Form} from "react-router";


export async function MyFormAction({request, params, context}: ActionFunctionArgs) {
    console.log(request);
    console.log(params);
    console.log(context);
    const formData = await request.formData();
    const title =  formData.get("title");
    console.log(formData);
    console.log(title);

    const updates = Object.fromEntries(formData);
    console.log(updates);
    return <div>ok</div>;
}

export default function MyForm(x) {
    console.log(x);
    return (

        <Form method="post">
            <input name="title" type="text" value="title"/>
            <input name="description" type="text" value="description"/>
            <button type="submit">Save</button>
        </Form>
    )
}