import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const HomeSimmer = () => {
  return (
    <>
      <div className="p-2 m-2  shadow-lg ">
        <Skeleton
          sx={{ bgcolor: "grey.500" }}
          variant="rectangular"
          width={320}
          height={180}
          animation="wave"
          className="simmer-image"
        />

        <Skeleton
          className="simmer-firstBox"
          animation="wave"
          width={230}
          height={20}
        />
        <Skeleton
          className="simmer-firstBox"
          animation="wave"
          width={200}
          height={20}
        />
      </div>
    </>
  );
};

export default function HomeSimmerUI() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {/* Use parentheses () instead of curly braces {} for the map function */}
        {Array(25)
          .fill("")
          .map((element, index) => (
            <HomeSimmer key={index} />
          ))}
      </div>
    </>
  );
}
