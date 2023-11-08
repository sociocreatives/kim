import Image from "next/image";

const Spinner = () => { 
    <div className="spinner">
        <Image src="/assets/images/loading.gif" alt="loading" width={100} height={100} />
    </div>
}

export default Spinner;