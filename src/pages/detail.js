import { Link, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import galleryImgData from "../services/constants/img-gallery";
import Footer from "../components/footer/footer";

function DetailPage() {
  const { id } = useParams();

  const getImgById = id => {
    return galleryImgData.find(img => img.title === id);
  };

  return (
    <section className="flex flex-col justify-between min-h-screen w-100">
      <Link
        to="/"
        className="flex items-center w-[300px] p-4 pl-4 transition-all hover:scale-105"
      >
        <BsArrowLeftCircleFill color="gray" size={30} />
        <p className="ml-2">Back to Home</p>
      </Link>

      <header className="my-8">
        <h1 className="text-2xl font-semibold text-center">{id}</h1>
      </header>

      <img
        className="mx-auto w-5/6 shadow-xl md:w-[500px] rounded-2xl"
        src={`${getImgById(id).urlImg}`}
        alt=""
      />
      <div className="max-w-3xl px-10 mx-auto my-8 text-center md:w-3/4">
        <p>`{getImgById(id).description}`</p>
      </div>

      <Footer />
    </section>
  );
}

export default DetailPage;
