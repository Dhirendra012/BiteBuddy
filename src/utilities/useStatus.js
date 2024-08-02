import { useEffect , useState } from "react";

const useStatus = () =>
{
    const [ stat , setStat ] = useState(true);

    useEffect(() => {
        addEventListener("offline" , () => { setStat(false); })
        addEventListener("online" , () => { setStat(true); })
    },[])

    return stat;
}

export default useStatus;