import {useParams, useRouteError} from "react-router";

export default function PageError() {
    const error = useRouteError() as {error:{}};
    const json = JSON.stringify(error);

    return <div><h2>Une erreur a été détectée </h2>

        <div>{error?.error?.toString() ?? error?.toString()}</div>
        <div>{json}</div>
    </div>
}