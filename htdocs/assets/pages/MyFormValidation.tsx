import {ActionFunctionArgs, data, redirect, useFetcher} from "react-router";
import {ROUTEURL} from "./App";


export async function MyFormAValidationAction({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const errors = {};

    if (!email.includes("@")) {
        errors.email = "Invalid email address";
    }

    if (password.length < 12) {
        errors.password =
          "Password should be at least 12 characters";
    }

    if (Object.keys(errors).length > 0) {
        return data({ errors }, { status: 400 });
    }

    // Redirect if validation is successful
    return redirect(ROUTEURL.home);}

export default function MyFormValidation() {
    let fetcher = useFetcher();
    let errors = fetcher.data?.errors;
    return (
      <fetcher.Form method="post">
          <p>
              <input type="input" name="email" />
              {errors?.email ? <em>{errors.email}</em> : null}
          </p>

          <p>
              <input type="input" name="password" />
              {errors?.password ? (
                <em>{errors.password}</em>
              ) : null}
          </p>

          <button type="submit">Sign Up</button>
      </fetcher.Form>
    );
}