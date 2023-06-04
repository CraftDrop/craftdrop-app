import ButtonPrimary from "./button";

const Pagination = ({ nextPage, prevPage, name }) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <ButtonPrimary name={name} label="prev" onClick={() => prevPage(name)} />
      <ButtonPrimary name={name} label="next" onClick={() => nextPage(name)} />
    </div>
  );
};

export default Pagination;
