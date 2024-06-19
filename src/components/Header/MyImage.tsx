import Image from "next/image";



export default function MyImageOnHeader(){

    return(
        <div className="h-48 w-48 rounded-full border-2 border-blue-50 flex justify-center items-center -translate-y-12
                max-md:w-32
                max-md:h-32
                ">
                    <Image
                    className="w-full h-full rounded-full object-contain"
                    src="/eu.jpeg"
                    width={192}
                    height={192}
                    alt="SOARES IMAGE"
                    />
                </div>
    )

}