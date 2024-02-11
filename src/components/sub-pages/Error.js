import { useRouteError } from "react-router-dom"

const Error = () => {
    const  err = useRouteError()
    console.log(err)
    return(
        <div className="error">
            <h1>Oops!!!</h1>
            <h3>There is something wrong</h3>
            <h1>{err.status}: {err.statusText}</h1>
        </div>
    )
}

export default Error