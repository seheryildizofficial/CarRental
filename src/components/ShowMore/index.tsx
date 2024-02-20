import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //1) URL de limit parametresi yoksa:kullanıcı projeye yeni girmiştir

  //2) URL de limit parametresi varsa:kullanıcı en az bir kez butona basmıştır

  //url den limit parametresi al
  const limit = Number(searchParams.get("limit")) || 5;

  const handleLimit = () => {
    //yeni limit belirle
    const newLimit = String(limit + 5);
    //console.log(newLimit)

    //parametreleri güncelle
    //ama güncellerken eski parametrelerin üzerine ekle
    searchParams.set("limit", newLimit);
    setSearchParams(searchParams);
  };
  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
        <CustomButton handleClick={handleLimit} title="Daha Fazla" />
      )}
    </div>
  );
};

export default ShowMore;
