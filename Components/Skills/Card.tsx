import Image from "next/image";

const Card:React.FC<any> = ({Title,ImageSrc}) => {
    return (
        <div className="w-full h-20 flex  gap-2 border rounded-md p-2 justify-between bg-white shadow ">
            <div className="w-[35%] h-full rounded-md relative"> 
            <Image
                  src={ImageSrc}
                  alt="Kamogelo Dhlakama"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
            </div>

            <div className="w-[65%] h-full justify-center  flex items-center relative font-normal  text-sm">
                <p>{Title}</p>
            </div>
        </div>
    );
}

export default Card;