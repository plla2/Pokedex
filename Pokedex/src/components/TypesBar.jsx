import useTypes from "../hooks/useTypes";
import { getTypeIconSrc } from "../utils/helper";

// eslint-disable-next-line react/prop-types
function TypesBar({ setType }) {
  const types = useTypes();
  return (
    <nav className="types-bar">
      {types.map(({ name }) => {
        const typeImg = getTypeIconSrc(name);
        return (
          <a key={name} className={name} onClick={() => setType(name)}>
            <img src={typeImg} alt={name} />
          </a>
        );
      })}
    </nav>
  );
}

export default TypesBar;
