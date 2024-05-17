export const Shimmer = () => {
    return (
        <div className="shimmer-container flex justify-evenly">
        
            <div className="shimmer-card bg-gray-200 m-2.5 p-2 w-48 h-64 rounded-xl" >
                <div className="dummy-image  w-46.5 h-2/5 rounded-md m-0.5 p-0.5 bg-slate-300" /> 
                <div className="shimmer-title  w-1/2 rounded-md h-5 bg-slate-300 m-1 mt-2.5"/>              
                <div className="shimmer-details  w-4/5 h-3.5 rounded-lg bg-slate-300 m-1 mt-2.5"/>
                <div className="shimmer-stars  w-1/5 h-3.5 rounded-lg bg-slate-300 m-1"/>
                <div className="shimmer-price  w-2/5 h-3.5 rounded-lg bg-slate-300 m-1"/>
                <div className="shimmer-time  w-3/5 h-3.5 rounded-lg bg-slate-300 m-1"/>                
            </div>

         </div>   
        
    )
}

