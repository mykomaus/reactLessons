import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

// eslint-disable-next-line react/prop-types
export const Header = ({ title, onClick, isAsc, isShowIcon }) => {
  const iconStyle = {
    size: isShowIcon ? 20 : 14,
    color: isShowIcon ? "black" : "gray",
    style: {
      padding: 8,
    },
  };
  return (
    <th>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          justifySelf: "center",
          width: "100%",
          backgroundColor: "white",
          fontWeight: isShowIcon ? "bolder" : "bold",
        }}
        onClick={onClick}
      >
        {title}
        {isAsc ? (
          <VscChevronUp {...iconStyle} />
        ) : (
          <VscChevronDown {...iconStyle} />
        )}
      </button>
    </th>
  );
};
